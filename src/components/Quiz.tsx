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
    const { answers } = useQuizContext();
    const [animationState, setAnimationState] = useState('animate-enter');

    // This is the key change:
    // We use a local state `selection` for immediate UI feedback.
    // It's initialized from the context but can be updated instantly.
    const [selection, setSelection] = useState<string | null>(null);

    // This effect syncs the local selection state with the context.
    // This is crucial for when the user navigates back and forth.
    useEffect(() => {
        setSelection(answers[question.id] || null);
        setAnimationState('animate-enter');
    }, [question.id, answers]);

    const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

    const handleAnswer = (value: string) => {
        // If a selection has already been made (either from context or this render), do nothing.
        if (selection) return;

        // 1. Provide immediate visual feedback by setting the local state.
        setSelection(value);

        // 2. Start the exit animation.
        setAnimationState('animate-exit');

        // 3. After the animation, notify the parent to save the state and move on.
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
                                // Use the immediate 'selection' state for styling
                                ${selection === option.v ? 'active transform scale-105' : ''}
                                ${selection && selection !== option.v ? 'opacity-40 scale-95' : ''}
                                cursor-pointer
                            `}
                            onClick={() => handleAnswer(option.v)}
                            // Disable the card if an answer has been selected.
                            disabled={!!selection}
                        >
                            <span className="relative z-2 text-sm sm:text-base">{option.l}</span>
                        </MouseTrackingCard>
                    ))}
                </div>
            </div>
            {/* Question progress indicator */}
            <div className="mt-8 sm:mt-16 text-center fixed bottom-14 left-1/2 transform -translate-x-1/2 w-full px-4 max-w-md">
                <div className="text-xs sm:text-sm text-white mb-3">
                    {currentQuestionIndex + 1}/{totalQuestions}
                </div>

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