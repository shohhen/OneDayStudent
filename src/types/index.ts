export interface QuizOption {
    v: string
    l: string
}

export interface Quiz {
    id: string
    q: string
    o: QuizOption[]
}

export interface University {
    id: string
    name: string
    tags: string[]
    reason: string
}

export interface Translations {
    en: TranslationSet
    ru: TranslationSet
    uz: TranslationSet
}

export interface TranslationSet {
    heroTitle: string
    heroSubtitle: string
    heroButton: string
    calculatingTitle: string
    calculatingSubtitle: string
    resultsTitle: string
    resultsSubtitle: string
    topMatch: string
    reserveTitle: string
    reserveSubtitle: string
    choosePrompt: string
    yourName: string
    yourContact: string
    submitButton: string
    submittingButton: string
    formError: string
    devError: string
    submitError: string
    formFinePrint: string
    thankYouTitle: string
    thankYouSubtitle: string
    headerTitle: string
}

export interface FormData {
    name: string
    contact: string
    selectedUniversity: string
}

export type Language = 'en' | 'ru' | 'uz'