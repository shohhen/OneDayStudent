import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { submitForm } from '@/utils/submitForm'
import { GOOGLE_SHEET_URL } from '@/consts/config'
import type { University, TranslationSet } from '@/types'

interface ResultsProps {
    recommendations: University[]
    onConfirm: () => void
    t: TranslationSet
}

export default function Results({ recommendations, onConfirm, t }: ResultsProps) {
    const [selectedUni, setSelectedUni] = useState<University | null>(null)
    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!name || !contact) {
            return setError(t.formError)
        }

        if (!selectedUni) {
            return
        }

        if (GOOGLE_SHEET_URL === 'YOUR_GOOGLE_SHEET_WEB_APP_URL') {
            return setError(t.devError)
        }

        setIsSubmitting(true)
        setError('')

        try {
            await submitForm({
                name,
                contact,
                selectedUniversity: selectedUni.name,
            })
            onConfirm()
        } catch (error) {
            console.error('Submission Error:', error)
            setError(t.submitError)
            setIsSubmitting(false)
        }
    }

    return (
        <div className="animate-enter max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">{t.resultsTitle}</h2>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">{t.resultsSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {recommendations.map((uni, index) => (
                    <Card
                        key={uni.id}
                        onClick={() => setSelectedUni(uni)}
                        className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                            selectedUni?.id === uni.id
                                ? 'ring-2 ring-primary'
                                : ''
                        }`}
                    >
                        <CardHeader>
                            {index === 0 && (
                                <div className="text-xs font-bold text-primary mb-2">{t.topMatch}</div>
                            )}
                            <CardTitle>{uni.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">"{uni.reason}"</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card className="p-8">
                <CardHeader>
                    <CardTitle className="text-center">{t.reserveTitle}</CardTitle>
                    <CardDescription
                        dangerouslySetInnerHTML={{
                            __html: t.reserveSubtitle.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                        }}
                    />
                </CardHeader>

                <CardContent>
                    {!selectedUni && (
                        <p className="text-center font-semibold text-primary animate-pulse">
                            {t.choosePrompt}
                        </p>
                    )}

                    {selectedUni && (
                        <form onSubmit={handleSubmit} className="mt-6 max-w-sm mx-auto animate-enter">
                            <p className="text-center text-sm mb-4">
                                You've selected: <strong className="text-primary">{selectedUni.name}</strong>
                            </p>
                            <div className="space-y-4">
                                <Input
                                    type="text"
                                    placeholder={t.yourName}
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    disabled={isSubmitting}
                                />
                                <Input
                                    type="text"
                                    placeholder={t.yourContact}
                                    value={contact}
                                    onChange={e => setContact(e.target.value)}
                                    disabled={isSubmitting}
                                />
                                <Button
                                    type="submit"
                                    className="w-full"
                                    disabled={isSubmitting || !selectedUni}
                                    size="lg"
                                >
                                    {isSubmitting ? t.submittingButton : t.submitButton}
                                </Button>
                            </div>
                            {error && <p className="text-destructive text-sm mt-2 text-center">{error}</p>}
                            <p className="text-xs text-muted-foreground text-center mt-3">{t.formFinePrint}</p>
                        </form>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}