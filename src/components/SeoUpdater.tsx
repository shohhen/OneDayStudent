import { Helmet } from 'react-helmet-async';
import type { AppState, Lang, TranslationSet, SeoTranslations } from '../types';

/**
 * A robust SeoUpdater component that works with the universal TranslationSet.
 * It safely accesses SEO translations and provides fallbacks.
 */
export function SeoUpdater({ appState, lang, t }: { appState: AppState; lang: Lang; t: TranslationSet }) {
    // Safely access the seo object, providing fallbacks from other translation keys if it doesn't exist.
    const seo: SeoTranslations = t.seo ?? {
        homeTitle: t.headerTitle ?? 'Bir Kun Talaba',
        homeDescription: t.heroSubtitle ?? 'Find your future profession.',
        quizTitle: t.heroButton ?? 'University Quiz',
        quizDescription: t.calculatingSubtitle ?? 'Analyzing your answers.',
        resultsTitle: t.resultsTitle ?? 'Your Recommendations',
        resultsDescription: t.resultsSubtitle ?? 'Here are your matched universities.',
    };

    let title = seo.homeTitle;
    let description = seo.homeDescription;

    switch (appState) {
        case 'quiz':
            title = seo.quizTitle;
            description = seo.quizDescription;
            break;
        case 'results':
            title = seo.resultsTitle;
            description = seo.resultsDescription;
            break;
        case 'hook':
        default:
            // Values are already set to home defaults
            break;
    }

    return (
        <Helmet>
            <html lang={lang} />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
        </Helmet>
    );
}