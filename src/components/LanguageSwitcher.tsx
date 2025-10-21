import React from 'react';
import type { Lang } from '../types';
import { MouseTrackingCard } from './ui/MouseTrackingCard';

interface LanguageSwitcherProps {
    lang: Lang;
    setLang: (lang: Lang) => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ lang, setLang }) => {
    const languages: { code: Lang, name: string }[] = [
        { code: 'uz', name: 'O\'z' },
        { code: 'ru', name: 'Ру' },
        { code: 'en', name: 'En' },
    ];

    return (
        <div className="flex flex-wrap items-center justify-center gap-2">
            {languages.map((language) => {
                const isSelected = language.code === lang;

                return (
                    <MouseTrackingCard
                        key={language.code}
                        className={`
              px-4 py-2 rounded-full text-sm font-medium
              ${isSelected ? 'active' : ''}
              cursor-pointer
            `}
                        onClick={() => setLang(language.code)}
                    >
                        <span className="relative z-2">{language.name}</span>
                        {/* Active indicator dot */}
                        {isSelected && (
                            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
                        )}
                    </MouseTrackingCard>
                );
            })}
        </div>
    );
};