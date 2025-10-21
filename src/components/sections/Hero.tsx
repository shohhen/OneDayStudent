
import type { TranslationSet } from '@/types'
import {Button} from "@/components/ui/button.tsx";

interface HeroProps {
    onStart: () => void
    t: TranslationSet
}

export default function Hero({ onStart, t }: HeroProps) {
    return (
        <div className="text-center animate-enter">
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight">
                {t.heroTitle}
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
                {t.heroSubtitle}
            </p>
            <Button size="lg" onClick={onStart}>
                {t.heroButton}
            </Button>
        </div>
    )
}