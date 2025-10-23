import {useState, useEffect} from 'react';
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
import {QuizProvider} from './utils/QuizContext.tsx';

function App() {
    const [lang, setLang] = useState<Lang>('uz');
    const [appState, setAppState] = useState<AppState>('hero');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [answers, setAnswers] = useState<Answers>({});
    const [recommendations, setRecommendations] = useState<University[]>([]);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    // Detect if device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkMobile);

        // Clean up
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const t = translations[lang];
    const quizQuestions = quizQuestionsData[lang];
    const universities = universitiesData[lang];

    // Handle going to previous question or state
    const handleGoBack = () => {
        // If in results, go back to the last quiz question
        if (appState === 'results') {
            setAppState('quiz');
            setCurrentQuestionIndex(quizQuestions.length - 1);
            return;
        }

        // If in quiz, go to previous question or hero
        if (appState === 'quiz') {
            if (currentQuestionIndex > 0) {
                setCurrentQuestionIndex(currentQuestionIndex - 1);
            } else {
                setAppState('hero');
            }
        }
    };

    const handleAnswer = (questionId: string, answer: string) => {
        const newAnswers = {...answers, [questionId]: answer};
        setAnswers(newAnswers);

        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setAppState('calculating');
            setTimeout(() => {
                calculateResults(newAnswers);
                setAppState('results');
            }, 2500);
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
            if (uni.tags.includes(finalAnswers.field)) scores[uni.id] += 2;
        });

        const sortedUniIds = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
        const topTwoIds = sortedUniIds.slice(0, 2);

        const finalRecommendations = topTwoIds
            .map(id => universities.find(uni => uni.id === id))
            .filter((u): u is University => u !== undefined); // Type guard to filter out undefined
        setRecommendations(finalRecommendations);
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

    // Check if we should show the back button in header
    // Show in both quiz and results screens
    const showBackButton = appState === 'quiz' || appState === 'results';

    return (
        <QuizProvider>
            <div className="flex flex-col min-h-screen relative overflow-x-hidden">
                {/* Only show MouseFollower on non-mobile devices */}
                {!isMobile && <MouseFollower />}

                {/* Background blobs */}
                <div className="shape-blob one"></div>
                <div className="shape-blob two"></div>
                <div className="shape-blob three"></div>

                {/* Fixed Header with Tailwind classes */}
                <header className="fixed top-0 left-0 right-0 z-50 bg-[#121a29]/80 backdrop-blur border-b border-white/10">
                    <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
                        <div className="flex items-center">
                            {/* Back Button - shown during quiz and results */}
                            {showBackButton && (
                                <button
                                    onClick={handleGoBack}
                                    className="mr-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                    aria-label="Back"
                                >
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                            )}
                            <h1 className="text-lg sm:text-xl font-bold text-primary">{t.headerTitle}</h1>
                        </div>
                        <LanguageSwitcher lang={lang} setLang={setLang} />
                    </div>
                </header>

                {/* Content area with padding for header */}
                <main className="flex-1 flex items-center justify-center w-full pt-20 pb-6 px-4">
                    <div className="w-full max-w-7xl">
                        {renderContent()}
                    </div>
                </main>
            </div>
        </QuizProvider>
    );
}

export default App;