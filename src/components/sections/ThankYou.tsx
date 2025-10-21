import type { TranslationSet } from '@/types'

interface ThankYouProps {
    t: TranslationSet
}

export default function ThankYou({ t }: ThankYouProps) {
    return (
        <div className="text-center animate-enter">
            <svg
                className="w-20 h-20 text-green-500 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
            </svg>
            <h1 className="text-4xl font-bold text-foreground mt-4">{t.thankYouTitle}</h1>
            <p className="max-w-xl mx-auto text-lg text-muted-foreground mt-2">
                {t.thankYouSubtitle}
            </p>
        </div>
    )
}