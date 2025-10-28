import React, { useState } from 'react';
import type { TranslationSet, University } from '../types';
import { GOOGLE_FORM_URL, GOOGLE_FORM_FIELDS } from '../config';
import { Button } from './ui/Button';
import { MouseTrackingCard } from "./ui/MouseTrackingCard";
import { useQuizContext } from '../utils/QuizContext';

interface ResultsProps {
    recommendations: University[];
    onConfirm: () => void;
    t: TranslationSet;
}

export const Results: React.FC<ResultsProps> = ({ recommendations, onConfirm, t }) => {
    const { answers, resetAnswers } = useQuizContext();
    const [selectedUni, setSelectedUni] = useState<University | null>(null);
    const [showForm, setShowForm] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [contact, setContact] = useState<string>('');
    const [consent, setConsent] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    // Handle university selection
    const handleUniSelect = (uni: University) => {
        setSelectedUni(uni);
        setShowForm(true);
        // Scroll to top when showing form
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Go back to university selection
    const handleBack = () => {
        setShowForm(false);
        setError('');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !contact) {
            return setError(t.formError);
        }
        if (!selectedUni) {
            return;
        }
        if (!consent) {
            return setError(t.consentError || "Please provide your consent to proceed.");
        }
        if (!GOOGLE_FORM_URL || !GOOGLE_FORM_FIELDS) {
            return setError(t.devError || "Google Form is not properly configured.");
        }

        setIsSubmitting(true);
        setError('');

        const now = new Date();
        const timestamp = now.toISOString().replace('T', ' ').substring(0, 19);

        try {
            const answersString = JSON.stringify(answers);

            const formData = new URLSearchParams();
            formData.append(GOOGLE_FORM_FIELDS.name, name);
            formData.append(GOOGLE_FORM_FIELDS.contact, contact);
            formData.append(GOOGLE_FORM_FIELDS.selectedUniversity, selectedUni.name);
            formData.append(GOOGLE_FORM_FIELDS.answers, answersString);
            formData.append(GOOGLE_FORM_FIELDS.consent, consent ? 'Yes' : 'No');
            formData.append(GOOGLE_FORM_FIELDS.timestamp, timestamp);

            await fetch(GOOGLE_FORM_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData,
            });

            // Clear all localStorage related to quiz after successful submission
            if (typeof window !== 'undefined') {
                localStorage.removeItem('appState');
                localStorage.removeItem('currentQuestionIndex');
                localStorage.removeItem('appAnswers');
                localStorage.removeItem('recommendations');
                localStorage.removeItem('quizAnswers');
                localStorage.removeItem('quizState');
            }

            resetAnswers();

            setName('');
            setContact('');
            setConsent(false);
            setSelectedUni(null);
            setShowForm(false);
            setIsSubmitting(false);

            onConfirm();
        } catch (error) {
            console.error('Form Submission Error:', error);
            setError(t.submitError);
            setIsSubmitting(false);
        }
    };

    // STEP 1: University Recommendations View
    const renderUniversityMatches = () => (
        <div className="animate-enter max-w-4xl mx-auto px-3 pt-6 w-full">
            <div className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">{t.resultsTitle}</h2>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-sm sm:text-base">{t.resultsSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-6 sm:my-8">
                {recommendations.map((uni, index) => (
                    <MouseTrackingCard
                        key={uni.id}
                        onClick={() => handleUniSelect(uni)}
                        className="glass-card rounded-xl p-4 sm:p-6 h-full cursor-pointer hover:scale-[1.02] transition-transform"
                    >
                        {index === 0 && <div className="text-xs sm:text-sm font-bold text-primary mb-2">{t.topMatch}</div>}
                        <h3 className="text-lg sm:text-xl font-bold">{uni.name}</h3>
                        <p className="text-muted-foreground mt-2 text-xs sm:text-sm flex-grow">"{uni.reason}"</p>
                    </MouseTrackingCard>
                ))}
            </div>

            <div className="text-center text-sm text-muted-foreground mt-8">
                {t.clickToSelect || "Click on a university to reserve your spot"}
            </div>
        </div>
    );

    // STEP 2: Registration Form View
    const renderRegistrationForm = () => (
        <div className="animate-enter max-w-4xl mx-auto px-3 pt-6 w-full">
            <div className="flex items-center mb-6">
                <button
                    onClick={handleBack}
                    className="flex items-center text-sm text-primary hover:text-primary/80"
                    aria-label="Go back"
                >
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    {t.backButton || "Back to recommendations"}
                </button>
            </div>

            <MouseTrackingCard className="p-5 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-center">{t.reserveTitle}</h3>

                <div className="my-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <h4 className="font-bold text-lg">{selectedUni?.name}</h4>
                    <p className="text-sm mt-2 text-white/80">"{selectedUni?.reason}"</p>
                </div>

                <p className="text-center text-muted-foreground mt-2 text-sm"
                   dangerouslySetInnerHTML={{__html: t.reserveSubtitle.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}}/>

                <form onSubmit={handleSubmit} className="mt-6 max-w-sm mx-auto animate-enter">
                    <input
                        type="text"
                        placeholder={t.yourName}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-md mb-4 bg-background/80 focus:ring-2 focus:ring-primary outline-none"
                        disabled={isSubmitting}
                    />
                    <input
                        type="text"
                        placeholder={t.yourContact}
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-md mb-4 bg-background/80 focus:ring-2 focus:ring-primary outline-none"
                        disabled={isSubmitting}
                    />

                    {/* Consent checkbox with Tailwind classes */}
                    <div className="flex items-start mb-4 p-3 bg-white/10 border border-white/20 rounded-md">
                        <input
                            type="checkbox"
                            id="consent"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            className="w-5 h-5 mt-0.5 mr-2 rounded border-gray-400 text-primary focus:ring-primary"
                            style={{appearance: 'checkbox', opacity: 1}}
                            disabled={isSubmitting}
                        />
                        <label htmlFor="consent" className="text-xs sm:text-sm leading-tight">
                            {t.consentText || "I agree to be contacted about this university recommendation."}
                        </label>
                    </div>

                    <Button
                        type="submit"
                        onClick={() => {}}
                        className="w-full"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? t.submittingButton : t.submitButton}
                    </Button>
                    {error && <p className="text-destructive text-xs sm:text-sm mt-2 text-center">{error}</p>}
                    <p className="text-xs text-muted-foreground text-center mt-3">{t.formFinePrint}</p>
                </form>
            </MouseTrackingCard>
        </div>
    );

    // Render the appropriate view based on state
    return showForm ? renderRegistrationForm() : renderUniversityMatches();
};