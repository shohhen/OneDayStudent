import React, {useEffect, useState} from 'react';
import type {Question} from '../types';
import {MouseTrackingCard} from './ui/MouseTrackingCard';
import {useQuizContext} from '../utils/QuizContext';

interface QuizProps {
    question: Question;
    onAnswer: (questionId: string, answer: string) => void;
    currentQuestionIndex?: number;
    totalQuestions?: number;
}

export const Quiz: React.FC<QuizProps> = ({
                                              question,
                                              onAnswer,
                                              currentQuestionIndex = 0,
                                              totalQuestions = 5
                                          }) => {
    const {updateAnswer} = useQuizContext();
    const [selected, setSelected] = useState<string | null>(null);
    const [animationState, setAnimationState] = useState('animate-enter');

    // Calculate progress percentage
    const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

    // Reset on question change
    useEffect(() => {
        setSelected(null);
        setAnimationState('animate-enter');
    }, [question.id]);

    const handleAnswer = (value: string) => {
        if (selected) return; // Prevent multiple clicks

        setSelected(value);
        // Start exit animation
        setAnimationState('animate-exit');

        // Save answer to context
        updateAnswer(question.id, value);

        // Wait for exit animation to complete before notifying parent
        setTimeout(() => {
            onAnswer(question.id, value);
        }, 400);
    };

    return (
        <>
            <div className={`w-full max-w-3xl mx-auto px-3 ${animationState}`}>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-10 text-white">{question.q}</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 stagger-enter">
                    {question.o.map(option => (
                        <MouseTrackingCard
                            key={option.v}
                            className={`
                            p-4 sm:p-6
                            transition-all duration-300
                            ${selected === option.v ? 'active transform scale-105' : ''}
                            ${selected && selected !== option.v ? 'opacity-40 scale-95' : ''}
                            cursor-pointer
                        `}
                            onClick={() => !selected && handleAnswer(option.v)}
                            disabled={!!selected}
                        >
                            <span className="relative z-2 text-sm sm:text-base">{option.l}</span>
                        </MouseTrackingCard>
                    ))}
                </div>
            </div>
            {/* Question progress indicator */}
            <div className="mt-8 sm:mt-16 text-center fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full px-4 max-w-md">
                <div className="text-xs sm:text-sm text-white mb-3">
                    {currentQuestionIndex + 1}/{totalQuestions}
                </div>

                {/* Fixed progress bar with explicit styles */}
                <div
                    className="relative w-full max-w-md mx-auto h-1.5 sm:h-2 bg-gray-300 bg-opacity-30 rounded-full overflow-hidden">
                    <div
                        className="absolute top-0 left-0 h-full bg-blue-400"
                        style={{
                            width: `${progressPercentage}%`,
                            transition: "width 0.5s ease-out"
                        }}
                    ></div>
                </div>
            </div>
        </>
    );
};