import React from 'react';
import type { Lang } from '../types';

interface LanguageSwitcherProps {
    lang: Lang;
    setLang: (lang: Lang) => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ lang, setLang }) => {
    const languages: Record<Lang, string> = {
        uz: "O'z",
        ru: 'Py',
        en: 'En'
    };

    return (
        // Используем базовые классы .button и .btn-ghost
        // Обертка в "бруталистском" стиле
        <div className="flex bg-transparent border border-border-color">
            {(Object.keys(languages) as Lang[]).map((code) => (
                <button
                    key={code}
                    onClick={() => setLang(code)}
                    // Убираем !rounded-lg, т.к. border-radius: 0 из .button
                    className={`button btn-ghost w-11 h-11 
                        ${lang === code
                        ? 'text-foreground bg-border-color' // Активный язык
                        : 'text-muted-foreground'}`
                    }
                    aria-label={`Switch to ${code} language`}
                >
                    {languages[code]}
                </button>
            ))}
        </div>
    );
};