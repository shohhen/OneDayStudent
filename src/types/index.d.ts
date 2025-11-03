export type AppState = 'hero' | 'quiz' | 'calculating' | 'results' | 'thanks';
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
    reserveTitle: string;
    reserveSubtitle: string;
    choosePrompt: string;
    yourName: string;
    yourContact: string;
    submitButton: string;
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

