import { useLanguage } from '@/hooks/useLanguage'
import LanguageSwitcher from '../LanguageSwitcher'

export default function Header() {
    const { translations, lang } = useLanguage()
    const t = translations[lang]

    return (
        <header className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center w-full max-w-7xl mx-auto z-50">
            <h1 className="text-xl font-bold text-primary">{t.headerTitle}</h1>
            <LanguageSwitcher />
        </header>
    )
}