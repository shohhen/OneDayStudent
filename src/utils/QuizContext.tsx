import React, { createContext, useContext, useState, useEffect } from 'react';

interface QuizContextType {
    answers: Record<string, string>;
    updateAnswer: (questionId: string, answer: string) => void;
    resetAnswers: () => void;
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
    // Initialize state from localStorage if available
    const [answers, setAnswers] = useState<Record<string, string>>(() => {
        // Check if we're in a browser environment first (for SSR compatibility)
        if (typeof window !== 'undefined') {
            const savedAnswers = localStorage.getItem('quizAnswers');
            return savedAnswers ? JSON.parse(savedAnswers) : {};
        }
        return {};
    });

    // Save to localStorage whenever answers change
    useEffect(() => {
        // Check if we're in a browser environment first
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
            localStorage.removeItem('quizAnswers');
        }
    };

    return (
        <QuizContext.Provider value={{ answers, updateAnswer, resetAnswers }}>
            {children}
        </QuizContext.Provider>
    );
};