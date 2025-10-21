import type { TranslationSet } from '@/types'
interface CalculatingProps {
    t: TranslationSet
}

export default function Calculating({ t }: CalculatingProps) {
    return (
        <div className="text-center animate-enter">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary mx-auto"></div>
            <h2 className="text-2xl font-bold mt-6 text-foreground">{t.calculatingTitle}</h2>
            <p className="text-muted-foreground mt-2">{t.calculatingSubtitle}</p>
        </div>
    )
}