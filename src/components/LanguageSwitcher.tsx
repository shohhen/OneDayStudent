import { useLanguage } from '@/hooks/useLanguage'
import { LANGUAGES } from '@/consts/config'
import {Button} from "@/components/ui/button.tsx";

export default function LanguageSwitcher() {
    const { lang, setLang } = useLanguage()

    return (
        <div className="flex items-center space-x-2 glass-card p-1 rounded-full border border-border">
            {LANGUAGES.map(l => (
                <Button
                    key={l.code}
                    onClick={() => setLang(l.code as any)}
                    variant={lang === l.code ? 'default' : 'ghost'}
                    size="sm"
                >
                    {l.name}
                </Button>
            ))}
        </div>
    )
}