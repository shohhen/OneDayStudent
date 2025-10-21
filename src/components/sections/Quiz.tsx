import { Progress } from '@/components/ui/progress'
import type { Quiz as QuizType } from '@/types'
import {useState} from "react";

interface QuizProps {
    question: QuizType
    onAnswer: (questionId: string, answer: string) => void
    progress: number
}

export default function Quiz({ question, onAnswer, progress }: QuizProps) {
    const [exiting, setExiting] = useState(false)
    const [selected, setSelected] = useState<string | null>(null)

    const handleAnswer = (value: string) => {
        setSelected(value)
        setExiting(true)
        setTimeout(() => {
            onAnswer(question.id, value)
        }, 400)
    }

    return (
        <div className={`w-full max-w-3xl mx-auto ${exiting ? 'animate-exit' : 'animate-enter'}`}>
            <div className="mb-8">
                <Progress value={progress} />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-center my-8 text-foreground">
                {question.q}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 stagger-enter">
                {question.o.map((option, index) => (
                    <button
                        key={option.v}
                        onClick={() => handleAnswer(option.v)}
                        style={{
                            animationDelay: `${index * 0.1}s`
                        }}
                        className={`
              p-6 rounded-lg text-left transition-all duration-300 text-base font-medium
              glass-card border-2
              ${
                            selected === option.v
                                ? 'bg-primary border-primary text-primary-foreground scale-105'
                                : 'border-border hover:border-primary text-foreground hover:shadow-lg'
                        }
            `}
                    >
                        <span className="block">{option.l}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}