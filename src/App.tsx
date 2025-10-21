import { useState } from 'react';
import type {AppState, Lang, Answers, University} from './types';
import { translations } from './data/i18n';
import { quizQuestionsData } from './data/questions';
import { universitiesData } from './data/universities';

import { Hero } from './components/Hero';
import { Quiz } from './components/Quiz';
import { Calculating } from './components/Calculating';
import { Results } from './components/Results';
import { ThankYou } from './components/ThankYou';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { MouseFollower } from './utils/mouseEffect/mouseEffect';

function App() {
    const [lang, setLang] = useState<Lang>('uz');
    const [appState, setAppState] = useState<AppState>('hero');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [answers, setAnswers] = useState<Answers>({});
    const [recommendations, setRecommendations] = useState<University[]>([]);

    const t = translations[lang];
    const quizQuestions = quizQuestionsData[lang];
    const universities = universitiesData[lang];

    const handleAnswer = (questionId: string, answer: string) => {
        const newAnswers = { ...answers, [questionId]: answer };
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
            uni.tags.forEach(tag => { if (Object.values(finalAnswers).includes(tag)) scores[uni.id]++; });
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
        switch(appState) {
            case 'hero':
                return <Hero onStart={() => setAppState('quiz')} t={t} />;
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
                return <Results recommendations={recommendations} onConfirm={() => setAppState('thanks')} t={t} />;
            case 'thanks':
                return <ThankYou t={t} />;
            default:
                return <Hero onStart={() => setAppState('quiz')} t={t} />;
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative">
            {/* Add the MouseFollower component */}
            <MouseFollower />

            {/* Enhanced background blobs */}
            <div className="shape-blob one"></div>
            <div className="shape-blob two"></div>
            <div className="shape-blob three"></div>

            <header className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center w-full max-w-7xl mx-auto">
                <h1 className="text-xl font-bold text-primary">{t.headerTitle}</h1>
                <LanguageSwitcher lang={lang} setLang={setLang} />
            </header>
            <main className="w-full z-10">{renderContent()}</main>
        </div>
    );
}

export default App;