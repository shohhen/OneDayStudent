import React, { createContext, useContext, useState, useEffect } from 'react';

interface QuizContextType {
    answers: Record<string, string>;
    updateAnswer: (questionId: string, answer: string) => void;
    resetAnswers: () => void;
    removeAnswer: (questionId: string) => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const useQuizContext = () => {
    const context = useContext(QuizContext);
    if (!context) {
        throw new Error('useQuizContext must be used within a QuizProvider');
    }
    return context;
};

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [answers, setAnswers] = useState<Record<string, string>>(() => {
        if (typeof window !== 'undefined') {
            const savedAnswers = localStorage.getItem('quizAnswers');
            return savedAnswers ? JSON.parse(savedAnswers) : {};
        }
        return {};
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('quizAnswers', JSON.stringify(answers));
        }
    }, [answers]);

    const updateAnswer = (questionId: string, answer: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: answer }));
    };

    const resetAnswers = () => {
        setAnswers({});
        if (typeof window !== 'undefined') {
            // Also clear other related items for a full reset
            localStorage.removeItem('quizAnswers');
            localStorage.removeItem('currentQuestionIndex');
            localStorage.removeItem('appState');
            localStorage.removeItem('recommendations');
        }
    };

    const removeAnswer = (questionId: string) => {
        setAnswers(prev => {
            const newAnswers = { ...prev };
            delete newAnswers[questionId];
            // The useEffect hook will handle updating localStorage
            return newAnswers;
        });
    };

    return (
        <QuizContext.Provider value={{ answers, updateAnswer, resetAnswers, removeAnswer }}>
            {children}
        </QuizContext.Provider>
    );
};