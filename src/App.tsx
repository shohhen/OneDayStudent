import { useEffect, useState } from 'react';
import type { Answers, AppState, Lang, University } from './types';
import { translations } from './data/i18n';
import { quizQuestionsData } from './data/questions';
import { universitiesData } from './data/universities';

// Импортируем наши 2 НОВЫХ "главных" компонента
import { LandingPage } from './components/LandingPage';
import { QuizFlow } from './components/QuizFlow';

import { LanguageSwitcher } from './components/LanguageSwitcher';
import { QuizProvider, useQuizContext } from './utils/QuizContext';
import { FaTelegram } from 'react-icons/fa';
import image from "./assets/logo.png";
import { SeoUpdater } from './components/SeoUpdater';

// Определяем, какие состояния относятся к "Лендингу", а какие к "Квизу"
const LANDING_STATE: AppState = 'landing';
const QUIZ_STATES: AppState[] = ['quiz', 'calculating', 'results', 'uniProfile', 'booking', 'thanks'];

function AppContent() {
    const [lang, setLang] = useState<Lang>('uz');
    // Начальное состояние теперь 'landing'
    const [appState, setAppState] = useState<AppState>(LANDING_STATE);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [recommendations, setRecommendations] = useState<University[]>([]);
    const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    const { answers, updateAnswer, resetAnswers } = useQuizContext();

    const t = translations[lang];
    const quizQuestions = quizQuestionsData[lang];
    const universities = universitiesData[lang];

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // ... (calculateResults - без изменений) ...
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
        const finalRecommendations = sortedUniIds
            .map(id => universities.find(uni => uni.id === id))
            .filter((u): u is University => u !== undefined);
        setRecommendations(finalRecommendations);
    };

    // ... (useEffect calculating - без изменений) ...
    useEffect(() => {
        if (appState === 'calculating') {
            const timer = setTimeout(() => {
                calculateResults(answers);
                setAppState('results');
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, [appState, answers, calculateResults, universities]);


    // ОБНОВЛЕННЫЕ ОБРАБОТЧИКИ
    const handleStartQuiz = () => {
        resetAnswers();
        setCurrentQuestionIndex(0);
        setRecommendations([]);
        setAppState('quiz'); // <-- Переключаемся на квиз
    }

    const handleAnswer = (questionId: string, answer: string) => {
        updateAnswer(questionId, answer);
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setAppState('calculating');
        }
    };

    const handleSelectUniversity = (uniId: string) => {
        const uni = universities.find(u => u.id === uniId);
        if (uni) {
            setSelectedUniversity(uni);
            setAppState('uniProfile'); // <-- Переключаемся на квиз (сцену профиля)
        }
    };

    const handleGoBack = () => {
        // Логика "Назад" теперь всегда возвращает на ЛЕНДИНГ
        // или на предыдущий шаг квиза
        if (appState === 'quiz' && currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        } else {
            setAppState(LANDING_STATE); // <-- Главное изменение
        }
    };

    // Определяем, активен ли квиз
    const isQuizActive = QUIZ_STATES.includes(appState);

    // Кнопка "Назад" теперь показывается только в потоке квиза
    const showBackButton = isQuizActive && appState !== 'results' && appState !== 'thanks';

    return (
        <div className="flex flex-col min-h-screen relative font-body bg-background">
            <SeoUpdater appState={appState} lang={lang} t={t} />

            {/* Хедер остается `fixed`, он работает для обеих раскладок */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border-color">
                <div className={`flex justify-between items-center max-w-7xl mx-auto ${isMobile ? 'p-3' : 'p-5'}`}>
                    <div className="flex items-center gap-3">
                        {showBackButton && (
                            <button
                                onClick={handleGoBack}
                                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-border-color transition-colors"
                                aria-label="Back"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        )}
                        {/* Логотип теперь всегда возвращает на 'landing' */}
                        <a href="/" onClick={(e) => { e.preventDefault(); setAppState(LANDING_STATE); }}>
                            <img src={image} alt="Logo" className="w-10 h-10"/>
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <LanguageSwitcher lang={lang} setLang={setLang}/>
                        <a
                            href="https://t.me/shohhen"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-border-color transition-colors"
                            aria-label="Telegram"
                        >
                            <FaTelegram size={22}/>
                        </a>
                    </div>
                </div>
            </header>

            {/* ГЛАВНЫЙ МАРШРУТИЗАТОР: ЛЕНДИНГ или КВИЗ */}
            <main className="flex-1 w-full">
                {isQuizActive ? (
                    <QuizFlow
                        appState={appState as any} // Мы уверены, что это один из стейтов квиза
                        t={t}
                        quizQuestions={quizQuestions}
                        currentQuestionIndex={currentQuestionIndex}
                        onAnswer={handleAnswer}
                        recommendations={recommendations}
                        onBook={handleSelectUniversity} // onBook и onSelect делают одно и то же
                        selectedUniversity={selectedUniversity}
                        onGoBack={handleGoBack}
                    />
                ) : (
                    <LandingPage
                        t={t}
                        onStartQuiz={handleStartQuiz}
                        onSelectUniversity={handleSelectUniversity}
                        universities={universities}
                    />
                )}
            </main>

            {/* Футер виден всегда (и на лендинге, и в квизе) */}
            <footer className="w-full text-center p-6 border-t border-border-color">
                <span className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} BirKunTalaba. All rights reserved.
                </span>
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