import { useState } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import Quiz from './components/sections/Quiz'
import Calculating from './components/sections/Calculating'
import Results from './components/sections/Results'
import ThankYou from './components/sections/ThankYou'
import { useLanguage } from './hooks/useLanguage'
import { quizQuestionsData, universitiesData } from './consts/data'
import { calculateResults as calculateRecommendations } from './utils/calculateResults'
import type { University } from './types'

function AppContent() {
    const { lang, translations } = useLanguage()
    const t = translations[lang]
    const quizQuestions = quizQuestionsData[lang]
    const universities = universitiesData[lang]
    const [appState, setAppState] = useState<'hero' | 'quiz' | 'calculating' | 'results' | 'thanks'>('hero')
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [answers, setAnswers] = useState<Record<string, string>>({})
    const [recommendations, setRecommendations] = useState<University[]>([])

    const handleAnswer = (questionId: string, answer: string) => {
        const newAnswers = { ...answers, [questionId]: answer }
        setAnswers(newAnswers)

        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        } else {
            setAppState('calculating')
            setTimeout(() => {
                const results = calculateRecommendations(newAnswers, universities)
                setRecommendations(results)
                setAppState('results')
            }, 2500)
        }
    }

    const handleStartQuiz = () => {
        setAppState('quiz')
        setCurrentQuestionIndex(0)
        setAnswers({})
    }

    const handleConfirm = () => {
        setAppState('thanks')
    }

    const renderContent = () => {
        switch (appState) {
            case 'hero':
                return <Hero onStart={handleStartQuiz} t={t} />
            case 'quiz':
                return (
                    <Quiz
                        question={quizQuestions[currentQuestionIndex]}
                        onAnswer={handleAnswer}
                        progress={((currentQuestionIndex + 1) / quizQuestions.length) * 100}
                    />
                )
            case 'calculating':
                return <Calculating t={t} />
            case 'results':
                return (
                    <Results
                        recommendations={recommendations}
                        onConfirm={handleConfirm}
                        t={t}
                    />
                )
            case 'thanks':
                return <ThankYou t={t} />
            default:
                return <Hero onStart={handleStartQuiz} t={t} />
        }
    }

    return <Layout>{renderContent()}</Layout>
}

function App() {
    return (
        <LanguageProvider>
            <AppContent />
        </LanguageProvider>
    )
}

export default App