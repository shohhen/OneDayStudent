export type AppState = 'hero' | 'quiz' | 'calculating' | 'results' | 'thanks';
export type Lang = 'en' | 'ru' | 'uz';
export type Answers = Record<string, string>;

export interface TranslationSet {
    [key: string]: string;
}

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

