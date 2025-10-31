import React, { useEffect, useState } from 'react';
import type { Question } from '../types';
import { Card } from './ui/Card';
import { useQuizContext } from '../utils/QuizContext';
import { motion } from 'framer-motion';

// Конфигурация для появления элементов квиза
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        }
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    },
};

interface QuizProps {
    question: Question;
    onAnswer: (questionId: string, answer: string) => void;
    currentQuestionIndex?: number;
    totalQuestions?: number;
}

export const Quiz: React.FC<QuizProps> = ({ question, onAnswer, currentQuestionIndex = 0, totalQuestions = 10 }) => {
    const { answers } = useQuizContext();
    const [selection, setSelection] = useState<string | null>(null);

    // Сброс 'selection' при смене вопроса
    useEffect(() => {
        setSelection(answers[question.id] || null);
    }, [question.id, answers]);

    const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

    const handleAnswer = (value: string) => {
        if (selection) return;
        setSelection(value);
        setTimeout(() => {
            onAnswer(question.id, value);
        }, 300); // Задержка для "ощущения" нажатия
    };

    return (
        <>
            <motion.div
                className="w-full max-w-4xl mx-auto p-6 pt-32 min-h-screen"
                key={question.id} // ВАЖНО: Анимируем *каждый* новый вопрос
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
                <motion.h2
                    variants={itemVariants}
                    className="section-title text-center mb-16"
                >
                    {question.q}
                </motion.h2>

                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                >
                    {question.o.map(option => (
                        <Card
                            key={option.v}
                            onClick={() => handleAnswer(option.v)}
                            className={`quiz-option p-6 h-full cursor-pointer 
                                ${selection === option.v ? 'active' : ''}
                                ${selection && selection !== option.v ? 'inactive' : ''}`}
                        >
                            <span className="text-xl font-bold uppercase">{option.l}</span>
                        </Card>
                    ))}
                </motion.div>
            </motion.div>

            {/* Прогресс-бар */}
            <div className="fixed bottom-0 left-0 right-0 w-full">
                <div className="text-sm text-muted-foreground mb-2 text-center p-6">
                    {currentQuestionIndex + 1} / {totalQuestions}
                </div>
                <div className="progress-bar-track w-full">
                    <div
                        className="progress-bar-fill"
                        style={{ width: `${progressPercentage}%`, transition: "width 0.5s ease-out" }}
                    ></div>
                </div>
            </div>
        </>
    );
};