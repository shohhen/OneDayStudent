import React from 'react';
import type {Lang} from '../types';

interface LanguageSwitcherProps {
    lang: Lang;
    setLang: (lang: Lang) => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({lang, setLang}) => {
    // Define all available languages
    const languages: Record<Lang, string> = {
        uz: "O'z",
        ru: 'Py',
        en: 'En'
    };

    return (
        <div className="flex space-x-2">
            {(Object.keys(languages) as Lang[]).map((code) => (
                <button
                    key={code}
                    onClick={() => setLang(code)}
                    className={`w-11 h-11 flex items-center justify-center rounded-xl transition-colors
                        ${lang === code
                        ? 'bg-primary text-white border border-primary'
                        : 'bg-white/10 text-white/80 border border-white/20 hover:bg-white/15'}`
                    }
                    aria-label={`Switch to ${code} language`}
                >
                    {languages[code]}
                </button>
            ))}
        </div>
    );
};