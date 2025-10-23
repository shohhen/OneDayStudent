import React from 'react';
import type { TranslationSet } from '../types';
import { Button } from './ui/Button';

interface HeroProps {
    onStart: () => void;
    t: TranslationSet;
}

export const Hero: React.FC<HeroProps> = ({ onStart, t }) => {
    return (
        <div className="w-full max-w-3xl mx-auto text-center px-3">
            {/* Use proper semantic elements and spacing */}
            <div className="hero-content">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.heroTitle}</h2>
                <p className="text-lg opacity-80 mb-8">{t.heroSubtitle}</p>
                <Button onClick={onStart} className="px-8 py-3 text-lg">
                    {t.heroButton}
                </Button>
            </div>
        </div>
    );
};