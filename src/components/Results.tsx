// src/components/Results.tsx

import React from 'react';
import type { TranslationSet, University } from '../types';
import { Button } from './ui/Button';
import { MouseTrackingCard } from "./ui/MouseTrackingCard";
import { FaTelegram } from 'react-icons/fa';

interface ResultsProps {
    recommendations: University[];
    t: TranslationSet;
}

export const Results: React.FC<ResultsProps> = ({ recommendations, t }) => {

    // IMPORTANT: Replace this with your Telegram Bot URL
    const TELEGRAM_BOT_URL = "https://t.me/BirKunTalabaBot";

    return (
        <div className="animate-enter max-w-4xl mx-auto px-3 pt-6 w-full">
            {/* Section 1: The Results */}
            <div className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">{t.resultsTitle}</h2>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-sm sm:text-base">{t.resultsSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-6 sm:my-8">
                {recommendations.map((uni, index) => (
                    <MouseTrackingCard
                        key={uni.id}
                        className="glass-card rounded-xl p-4 sm:p-6 h-full"
                        // Remove onClick handler
                    >
                        {index === 0 && <div className="text-xs sm:text-sm font-bold text-primary mb-2">{t.topMatch}</div>}
                        <h3 className="text-lg sm:text-xl font-bold">{uni.name}</h3>
                        <p className="text-muted-foreground mt-2 text-xs sm:text-sm flex-grow">"{uni.reason}"</p>
                    </MouseTrackingCard>
                ))}
            </div>

            {/* Section 2: The "Upsell" & Telegram CTA */}
            <hr className="border-white/10 my-8 sm:my-12" />

            <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold">{t.resultsUpsellTitle}</h3>
                <p className="text-muted-foreground mt-3 mb-6 text-sm sm:text-base"
                   dangerouslySetInnerHTML={{ __html: t.resultsUpsellBody.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                />
                <Button
                    onClick={() => window.open(TELEGRAM_BOT_URL, '_blank')}
                    className="w-full max-w-sm mx-auto text-lg py-4"
                >
                    <FaTelegram size={24} className="mr-3" />
                    {t.resultsTelegramButton}
                </Button>
            </div>
        </div>
    );
};