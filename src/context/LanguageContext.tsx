import { createContext, useState, ReactNode } from 'react'
import translations from '../consts/translations'
import type { Language } from '@/types'

interface LanguageContextType {
    lang: Language
    setLang: (lang: Language) => void
    translations: typeof translations
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
    children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [lang, setLang] = useState<Language>('en')

    const value: LanguageContextType = {
        lang,
        setLang,
        translations,
    }

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}