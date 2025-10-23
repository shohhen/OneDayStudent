import React from 'react';
import { LanguageSwitcher } from '../LanguageSwitcher';
import type { Lang, TranslationSet } from '../../types';

interface HeaderProps {
    lang: Lang;
    setLang: (lang: Lang) => void;
    t: TranslationSet;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, t }) => {
    return (
        <div className="fixed-header">
            <div className="header-content">
                <h1 className="text-lg sm:text-xl font-bold text-primary">{t.headerTitle}</h1>
                <LanguageSwitcher lang={lang} setLang={setLang} />
            </div>
        </div>
    );
};