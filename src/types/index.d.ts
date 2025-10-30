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
    [key: string]: string;
} & {
    seo?: SeoTranslations;
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

