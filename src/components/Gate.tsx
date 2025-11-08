import React, { useState } from 'react';
import type { TranslationSet, University } from '../types';
import { GOOGLE_FORM_URL, GOOGLE_FORM_FIELDS } from '../config';
import { Button } from './ui/Button';
import { MouseTrackingCard } from "./ui/MouseTrackingCard";
import { useQuizContext } from '../utils/QuizContext';

interface GateProps {
    recommendations: University[];
    onRegister: () => void;
    t: TranslationSet;
}

export const Gate: React.FC<GateProps> = ({ recommendations, onRegister, t }) => {
    const { answers } = useQuizContext();
    const [name, setName] = useState<string>('');
    const [contact, setContact] = useState<string>('');
    const [consent, setConsent] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !contact) {
            return setError(t.formError);
        }
        if (!consent) {
            return setError(t.consentError);
        }
        if (!GOOGLE_FORM_URL || !GOOGLE_FORM_FIELDS) {
            return setError(t.devError);
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
            formData.append(GOOGLE_FORM_FIELDS.answers, answersString);
            formData.append(GOOGLE_FORM_FIELDS.consent, consent ? 'Yes' : 'No');
            formData.append(GOOGLE_FORM_FIELDS.timestamp, timestamp);

            // *** CHANGE IS HERE ***
            // Convert the list of matched universities into a string
            const universityMatchesString = recommendations
                .map(uni => uni.name)
                .join(', ');

            // Send the comma-separated list of university names
            if (GOOGLE_FORM_FIELDS.selectedUniversity) {
                formData.append(GOOGLE_FORM_FIELDS.selectedUniversity, universityMatchesString);
            }

            await fetch(GOOGLE_FORM_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData,
            });

            setIsSubmitting(false);
            onRegister();

        } catch (error) {
            console.error('Form Submission Error:', error);
            setError(t.submitError);
            setIsSubmitting(false);
        }
    };

    return (
        <div className="animate-enter max-w-4xl mx-auto px-3 pt-6 w-full">
            <MouseTrackingCard className="p-5 sm:p-8 max-w-lg mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-center">{t.gateTitle}</h3>

                <p className="text-center text-muted-foreground mt-4 text-sm"
                   dangerouslySetInnerHTML={{__html: t.gateSubtitle.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}}/>

                <form onSubmit={handleSubmit} className="mt-6 max-w-sm mx-auto">
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

                    <div className="flex items-start mb-4 p-3 bg-white/10 border border-white/20 rounded-md">
                        <input
                            type="checkbox"
                            id="consent"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            className="appearance-none w-6 h-6 rounded-full border-2 border-gray-400 bg-white
                                       checked:bg-primary checked:border-transparent
                                       focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                                       disabled:opacity-50"
                            disabled={isSubmitting}
                        />
                        <label htmlFor="consent" className="text-xs sm:text-sm pl-2 leading-tight">
                            {t.consentText}
                        </label>
                    </div>

                    <Button
                        type="submit"
                        onClick={() => {}}
                        className="w-full"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? t.submittingButton : t.gateSubmitButton}
                    </Button>
                    {error && <p className="text-destructive text-xs sm:text-sm mt-2 text-center">{error}</p>}
                </form>
            </MouseTrackingCard>
        </div>
    );
};
