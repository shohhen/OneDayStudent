import React from 'react';
import type { TranslationSet, University } from '../types';
import { AnimatePresence } from 'framer-motion';

// Импортируем только "слайды" квиза
import { Quiz } from './Quiz';
import { Calculating } from './Calculating';
import { Results } from './Results';
import { UniversityProfile } from './UniversityProfile';
import { ThankYou } from './ThankYou';

interface QuizFlowProps {
    appState: 'quiz' | 'calculating' | 'results' | 'uniProfile' | 'booking' | 'thanks';
    t: TranslationSet;
    quizQuestions: any[]; // Типизируйте в соответствии с вашим 'types.ts'
    currentQuestionIndex: number;
    onAnswer: (questionId: string, answer: string) => void;
    recommendations: University[];
    onBook: (uniId: string) => void;
    selectedUniversity: University | null;
    onGoBack: () => void;
}

export const QuizFlow: React.FC<QuizFlowProps> = ({
                                                      appState,
                                                      t,
                                                      quizQuestions,
                                                      currentQuestionIndex,
                                                      onAnswer,
                                                      recommendations,
                                                      onBook,
                                                      selectedUniversity,
                                                      onGoBack
                                                  }) => {

    const renderQuizContent = () => {
        switch (appState) {
            case 'quiz':
                return <Quiz
                    key="quiz"
                    question={quizQuestions[currentQuestionIndex]}
                    onAnswer={onAnswer}
                    currentQuestionIndex={currentQuestionIndex}
                    totalQuestions={quizQuestions.length}
                />;
            case 'calculating':
                return <Calculating key="calculating" t={t} />;
            case 'results':
                return <Results
                    key="results"
                    recommendations={recommendations}
                    onBook={onBook}
                    t={t}
                />;
            case 'uniProfile':
                if (!selectedUniversity) return <Calculating key="loading-profile" t={t} />;
                return <UniversityProfile
                    key="profile"
                    university={selectedUniversity}
                    onBook={() => { /* TODO: setAppState('booking') */ }}
                    onBack={onGoBack}
                    t={t}
                />;
            case 'booking':
                return <div key="booking" className="min-h-screen p-6 pt-32 text-center"><h2 className="section-title">Booking</h2><p>Booking form goes here...</p></div>;
            case 'thanks':
                return <ThankYou key="thanks" t={t} />;
            default:
                return null;
        }
    }

    return (
        <AnimatePresence mode="wait">
            <div key={appState} className="w-full">
                {renderQuizContent()}
            </div>
        </AnimatePresence>
    );
};