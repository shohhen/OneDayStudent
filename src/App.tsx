import {useEffect, useState} from 'react';
import type {Answers, AppState, Lang, University} from './types';
import {translations} from './data/i18n';
import {quizQuestionsData} from './data/questions';
import {universitiesData} from './data/universities';

import {Hero} from './components/Hero';
import {Quiz} from './components/Quiz';
import {Calculating} from './components/Calculating';
import {Results} from './components/Results';
import {ThankYou} from './components/ThankYou';
import {LanguageSwitcher} from './components/LanguageSwitcher';
import {MouseFollower} from './utils/mouseEffect.tsx';
import {QuizProvider, useQuizContext} from './utils/QuizContext.tsx';
import {FaTelegram} from 'react-icons/fa';
import image from "./assets/logo.png";
import { SeoUpdater } from './components/SeoUpdater'; // Import the new universal component

function AppContent() {
    const [lang, setLang] = useState<Lang>('uz');
    const [appState, setAppState] = useState<AppState>(() => {
        if (typeof window !== 'undefined') {
            const savedAppState = localStorage.getItem('appState');
            return (savedAppState as AppState) || 'hero';
        }
        return 'hero';
    });
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('currentQuestionIndex');
            return saved ? parseInt(saved, 10) : 0;
        }
        return 0;
    });
    const [recommendations, setRecommendations] = useState<University[]>(() => {
        if (typeof window !== 'undefined') {
            const savedRecommendations = localStorage.getItem('recommendations');
            return savedRecommendations ? JSON.parse(savedRecommendations) : [];
        }
        return [];
    });
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const { answers, updateAnswer, removeAnswer, resetAnswers } = useQuizContext();

    useEffect(() => {
        if (typeof window !== 'undefined' && appState !== 'thanks') {
            localStorage.setItem('appState', appState);
        }
    }, [appState]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('currentQuestionIndex', currentQuestionIndex.toString());
        }
    }, [currentQuestionIndex]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('recommendations', JSON.stringify(recommendations));
        }
    }, [recommendations]);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (appState === 'calculating') {
            const timer = setTimeout(() => {
                calculateResults(answers);
                setAppState('results');
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, [appState, answers]);

    useEffect(() => {
        if (appState === 'thanks') {
            resetAnswers();
        }
    }, [appState, resetAnswers]);


    const t = translations[lang];
    const quizQuestions = quizQuestionsData[lang];
    const universities = universitiesData[lang];

    const handleGoBack = () => {
        if (appState === 'results') {
            const lastQuestionIndex = quizQuestions.length - 1;
            const lastQuestion = quizQuestions[lastQuestionIndex];
            if (lastQuestion) {
                removeAnswer(lastQuestion.id);
            }
            setAppState('quiz');
            setCurrentQuestionIndex(lastQuestionIndex);
            return;
        }

        if (appState === 'quiz') {
            if (currentQuestionIndex > 0) {
                const previousQuestionIndex = currentQuestionIndex - 1;
                const questionToClear = quizQuestions[previousQuestionIndex];
                if (questionToClear) {
                    removeAnswer(questionToClear.id);
                }
                setCurrentQuestionIndex(previousQuestionIndex);
            } else {
                setAppState('hero');
            }
        }
    };

    const handleAnswer = (questionId: string, answer: string) => {
        updateAnswer(questionId, answer);

        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setAppState('calculating');
        }
    };

    const calculateResults = (finalAnswers: Answers) => {
        const baseUniversities = universitiesData['en'];
        const scores: Record<string, number> = {};
        baseUniversities.forEach(uni => {
            scores[uni.id] = 0;
            uni.tags.forEach(tag => {
                if (Object.values(finalAnswers).includes(tag)) scores[uni.id]++;
            });
            if (finalAnswers.field && uni.tags.includes(finalAnswers.field)) {
                scores[uni.id] += 2;
            }
        });

        const sortedUniIds = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
        const topThreeIds = sortedUniIds.slice(0, 3);

        const finalRecommendations = topThreeIds
            .map(id => universities.find(uni => uni.id === id))
            .filter((u): u is University => u !== undefined);
        setRecommendations(finalRecommendations.filter(Boolean));
    };

    const renderContent = () => {
        switch (appState) {
            case 'hero':
                return <Hero onStart={() => setAppState('quiz')} t={t}/>;
            case 'quiz':
                return (
                    <Quiz
                        question={quizQuestions[currentQuestionIndex]}
                        onAnswer={handleAnswer}
                        currentQuestionIndex={currentQuestionIndex}
                        totalQuestions={quizQuestions.length}
                    />
                );
            case 'calculating':
                return <Calculating t={t}/>;
            case 'results':
                return <Results recommendations={recommendations} onConfirm={() => setAppState('thanks')} t={t}/>;
            case 'thanks':
                return <ThankYou t={t}/>;
            default:
                return <Hero onStart={() => setAppState('quiz')} t={t}/>;
        }
    };

    const showBackButton = appState === 'quiz' || appState === 'results' || appState === 'calculating';

    return (
        <div className="flex flex-col min-h-screen relative overflow-x-hidden">
            <SeoUpdater appState={appState} lang={lang} t={t} />
            {!isMobile && <MouseFollower/>}
            <div className="shape-blob one"></div>
            <div className="shape-blob two"></div>
            <div className="shape-blob three"></div>
            <header
                className="fixed top-0 left-0 right-0 z-50 bg-[#121a29]/80 backdrop-blur border-b border-white/10">
                <div className={`flex justify-between items-center max-w-7xl mx-auto ${isMobile ? 'p-2' : 'p-4'}`}>
                    <div className="flex items-center">
                        {showBackButton && (
                            <button
                                onClick={handleGoBack}
                                className="mr-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                aria-label="Back"
                            >
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M15 19l-7-7 7-7"/>
                                </svg>
                            </button>
                        )}
                        <img src={image} alt="Logo" className="w-11 h-11 mr-3"/>
                        {!isMobile && <h1 className="text-lg sm:text-xl font-bold text-primary">{t.headerTitle}</h1>}
                    </div>
                    <div className="flex items-center gap-4">
                        <LanguageSwitcher lang={lang} setLang={setLang}/>
                        <a
                            href="https://t.me/shohhen"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white hover:text-blue-400"
                            aria-label="Telegram"
                        >
                            <FaTelegram size={35}/>
                        </a>
                    </div>
                </div>
            </header>
            <main className={`flex-1 flex items-center justify-center w-full ${isMobile ? 'pt-16 pb-2 px-2' : 'pt-20 pb-6 px-4'}`}>
                <div className="w-full max-w-7xl">
                    {renderContent()}
                </div>
            </main>
            <footer className={`w-full text-center text-sm text-white/60 ${isMobile ? 'py-2' : 'py-4'}`}>
                <div className="flex items-center flex-col justify-center gap-4">
                    <span>&copy; {new Date().getFullYear()} BirKunTalaba. {t.footerText}</span>
                </div>
            </footer>
        </div>
    );
}

function App() {
    return (
        <QuizProvider>
            <AppContent />
        </QuizProvider>
    );
}

export default App;