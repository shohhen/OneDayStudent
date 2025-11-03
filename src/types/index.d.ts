export type AppState = 'hero' | 'quiz' | 'calculating' | 'gate' | 'results';
export type Lang = 'en' | 'ru' | 'uz';
export type Answers = Record<string, string>;

export interface SeoTranslations {
    homeTitle: string;
    homeDescription: string;
    quizTitle: string;
    quizDescription: string;
    resultsTitle: string;
    resultsDescription: string;
}

export type TranslationSet = {
    heroTitle: string;
    heroSubtitle: string;
    heroButton: string;
    calculatingTitle: string;
    calculatingSubtitle: string;
    resultsTitle: string;
    resultsSubtitle: string;
    topMatch: string;
    yourName: string;
    yourContact: string;
    submittingButton: string;
    formError: string;
    devError: string;
    submitError: string;
    formFinePrint: string;
    thankYouTitle: string;
    thankYouSubtitle: string;
    headerTitle: string;
    consentText: string;
    consentError: string;
    clickToSelect: string;
    backButton: string;
    footerText: string;
    seo: SeoTranslations;
    gateTitle: string;
    gateSubtitle: string;
    gateSubmitButton: string;
    resultsUpsellTitle: string;
    resultsUpsellBody: string;
    resultsTelegramButton: string;
};

export interface QuestionOption {
    v: string;
    l: string;
}

export interface Question {
    id: string;
    q: string;
    o: QuestionOption[];
}

export interface University {
    id: string;
    name: string;
    tags: string[];
    reason: string;
}

