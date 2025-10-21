import React, {useState} from 'react';
import type {TranslationSet, University} from '../types';
import {GOOGLE_SHEET_URL} from '../config';
import {Button} from './ui/Button';
import {MouseTrackingCard} from "./ui/MouseTrackingCard.tsx";

interface ResultsProps {
    recommendations: University[];
    onConfirm: () => void;
    t: TranslationSet;
}

export const Results: React.FC<ResultsProps> = ({recommendations, onConfirm, t}) => {
    const [selectedUni, setSelectedUni] = useState<University | null>(null);
    const [name, setName] = useState<string>('');
    const [contact, setContact] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !contact) {
            return setError(t.formError);
        }
        if (!selectedUni) {
            return;
        }
        if (GOOGLE_SHEET_URL === 'YOUR_GOOGLE_SHEET_WEB_APP_URL') {
            return setError(t.devError);
        }

        setIsSubmitting(true);
        setError('');

        const formData = new FormData();
        formData.append('name', name);
        formData.append('contact', contact);
        formData.append('selected_university', selectedUni.name);
        formData.append('timestamp', new Date().toISOString());

        try {
            const response = await fetch(GOOGLE_SHEET_URL, {method: 'POST', body: formData});
            if (response.ok) {
                onConfirm();
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('Submission Error:', error);
            setError(t.submitError);
            setIsSubmitting(false);
        }
    };

    return (
        <div className="animate-enter max-w-4xl mx-auto">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold">{t.resultsTitle}</h2>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">{t.resultsSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                {recommendations.map((uni, index) => (
                    <MouseTrackingCard key={uni.id} onClick={() => setSelectedUni(uni)}
                                       className={`${selectedUni?.id === uni.id ? 'ring-2 ring-primary ring-offset-4 ring-offset-background' : ''} glass-card rounded-xl p-6 h-full`}>
                        {index === 0 && <div className="text-sm font-bold text-primary mb-2">{t.topMatch}</div>}
                        <h3 className="text-xl font-bold">{uni.name}</h3>
                        <p className="text-muted-foreground mt-2 text-sm flex-grow">"{uni.reason}"</p>
                    </MouseTrackingCard>
                ))}
            </div>

            <MouseTrackingCard className="p-8 mt-10">
                <h3 className="text-2xl font-bold text-center">{t.reserveTitle}</h3>
                <p className="text-center text-muted-foreground mt-2"
                   dangerouslySetInnerHTML={{__html: t.reserveSubtitle.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}}/>

                {!selectedUni &&
                    <p className="text-center font-semibold text-primary mt-6 animate-pulse">{t.choosePrompt}</p>}

                {selectedUni && (
                    <form onSubmit={handleSubmit} className="mt-6 max-w-sm mx-auto animate-enter">
                        <p className="text-center text-sm mb-4">You've selected: <strong
                            className="text-primary">{selectedUni.name}</strong></p>
                        <input type="text" placeholder={t.yourName} value={name}
                               onChange={(e) => setName(e.target.value)}
                               className="w-full px-4 py-3 border rounded-md mb-4 bg-background/80 focus:ring-2 focus:ring-primary outline-none"
                               disabled={isSubmitting}/>
                        <input type="text" placeholder={t.yourContact} value={contact}
                               onChange={(e) => setContact(e.target.value)}
                               className="w-full px-4 py-3 border rounded-md mb-4 bg-background/80 focus:ring-2 focus:ring-primary outline-none"
                               disabled={isSubmitting}/>
                        <Button type="submit" onClick={() => {
                        }} className="w-full"
                                disabled={isSubmitting || !selectedUni}>{isSubmitting ? t.submittingButton : t.submitButton}</Button>
                        {error && <p className="text-destructive text-sm mt-2 text-center">{error}</p>}
                        <p className="text-xs text-muted-foreground text-center mt-3">{t.formFinePrint}</p>
                    </form>

                )}
            </MouseTrackingCard>
        </div>
    );
};
