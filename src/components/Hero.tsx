import React from 'react';
import type {TranslationSet} from '../types';
import {MouseTrackingCard} from "./ui/MouseTrackingCard.tsx";

interface HeroProps {
    onStart: () => void;
    t: TranslationSet;
}

export const Hero: React.FC<HeroProps> = ({onStart, t}) => (
    <div className="text-center animate-enter">
        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight">{t.heroTitle}</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">{t.heroSubtitle}</p>
            <MouseTrackingCard
                className="inline-block px-8 py-4 text-lg font-medium cursor-pointer mx-auto"
                onClick={onStart}
            >{t.heroButton}</MouseTrackingCard>
    </div>
);
