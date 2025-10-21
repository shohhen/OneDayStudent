import React, { useState, useEffect } from 'react';
import type { Question } from '../types';
import { MouseTrackingCard } from './ui/MouseTrackingCard';

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

        // Wait for exit animation to complete before notifying parent
        setTimeout(() => {
            onAnswer(question.id, value);
        }, 400);
    };

    return (
        <div className={`w-full max-w-3xl mx-auto ${animationState}`}>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white">{question.q}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 stagger-enter mb-12">
                {question.o.map(option => (
                    <MouseTrackingCard
                        key={option.v}
                        className={`
                            p-6
                            transition-all duration-300
                            ${selected === option.v ? 'active transform scale-105' : ''}
                            ${selected && selected !== option.v ? 'opacity-40 scale-95' : ''}
                            cursor-pointer
                        `}
                        onClick={() => !selected && handleAnswer(option.v)}
                        disabled={!!selected}
                    >
                        <span className="relative z-2">{option.l}</span>
                    </MouseTrackingCard>
                ))}
            </div>

            {/* Question progress indicator */}
            <div className="mt-16 text-center">
                <div className="text-sm text-white mb-3">
                    Question {currentQuestionIndex + 1} of {totalQuestions}
                </div>

                {/* Fixed progress bar with explicit styles */}
                <div className="relative w-full max-w-md mx-auto h-2 bg-gray-300 bg-opacity-30 rounded-full overflow-hidden">
                    <div
                        className="absolute top-0 left-0 h-full bg-blue-400"
                        style={{
                            width: `${progressPercentage}%`,
                            transition: "width 0.5s ease-out"
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};