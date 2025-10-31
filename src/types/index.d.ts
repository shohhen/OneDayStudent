/* ═══════════════════════════════════════════════════════════════════════════
   GEN Z DESIGN SYSTEM - TYPE DEFINITIONS
   ═══════════════════════════════════════════════════════════════════════════
   Updated type definitions to support new Gen Z design system, animations,
   and component variants. Backward compatible with existing code.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────────────────────
   APPLICATION STATE
   ───────────────────────────────────────────────────────────────────────── */

export type AppState =
    | 'hook'          // Slide 1: The intro/hook
    | 'advantages'    // Slide 2: Value proposition
    | 'crossroads'    // Slide 3: Choose your path
    | 'quiz'          // Discovery path: Quiz questions
    | 'calculating'   // Loading state: Processing answers
    | 'results'       // Quiz results & recommendations
    | 'uniBrowser'    // Researcher path: University selection
    | 'uniProfile'    // University detail page
    | 'booking'
    | 'landing'// Booking/contact form
    | 'thanks';       // Thank you/confirmation

/* ─────────────────────────────────────────────────────────────────────────
   LANGUAGE & INTERNATIONALIZATION
   ───────────────────────────────────────────────────────────────────────── */

export type Lang = 'en' | 'ru' | 'uz';

/* ─────────────────────────────────────────────────────────────────────────
   QUIZ & ANSWERS
   ───────────────────────────────────────────────────────────────────────── */

export type Answers = Record<string, string>;

export interface QuestionOption {
    v: string;  // Value (what gets stored)
    l: string;  // Label (what user sees)
}

export interface Question {
    id: string;
    q: string;  // Question text
    o: QuestionOption[];  // Options array
}

/* ─────────────────────────────────────────────────────────────────────────
   UNIVERSITY DATA
   ───────────────────────────────────────────────────────────────────────── */

export interface University {
    id: string;
    name: string;
    logo?: string;
    tags: string[];  // Matching tags for recommendations
    reason: string;  // Why this university matches the user
}

/* ─────────────────────────────────────────────────────────────────────────
   SEO & META
   ───────────────────────────────────────────────────────────────────────── */

export interface SeoTranslations {
    homeTitle: string;
    homeDescription: string;
    quizTitle: string;
    quizDescription: string;
    resultsTitle: string;
    resultsDescription: string;
}

/* ─────────────────────────────────────────────────────────────────────────
   TRANSLATIONS - COMPLETE TRANSLATION SET
   ───────────────────────────────────────────────────────────────────────── */

export interface TranslationSet {
    /* ═════════════════════════════════════════════════════════════
       HOOK / LANDING PAGE
       ═════════════════════════════════════════════════════════════ */
    hookTitle: string;
    hookSubtitle: string;
    hookButton: string;

    /* ═════════════════════════════════════════════════════════════
       ADVANTAGES SECTION
       ═════════════════════════════════════════════════════════════ */
    advantagesTitle: string;
    advantage1Title: string;
    advantage1Desc: string;
    advantage2Title: string;
    advantage2Desc: string;
    advantage3Title: string;
    advantage3Desc: string;
    advantagesButton: string;

    /* ═════════════════════════════════════════════════════════════
       CROSSROADS / PATH SELECTION
       ═════════════════════════════════════════════════════════════ */
    crossroadsTitle: string;
    discoveryPathTitle: string;
    discoveryPathSubtitle: string;
    researcherPathTitle: string;
    researcherPathSubtitle: string;

    /* ═════════════════════════════════════════════════════════════
       QUIZ
       ═════════════════════════════════════════════════════════════ */
    quizInstructions?: string;

    /* ═════════════════════════════════════════════════════════════
       UNIVERSITY BROWSER / SELECTION
       ═════════════════════════════════════════════════════════════ */
    uniBrowserTitle: string;
    uniBrowserSubtitle: string;
    uniBrowserSearchPlaceholder: string;

    /* ═════════════════════════════════════════════════════════════
       UNIVERSITY PROFILE / OFFER PAGE
       ═════════════════════════════════════════════════════════════ */
    experienceTitle: (universityName: string) => string;
    experienceOfferText: (price: string) => string;
    experienceBookingButton: (universityName: string) => string;
    whatsIncludedTitle: string;
    whatsIncluded1: string;
    whatsIncluded2: string;
    whatsIncluded3: string;
    studentTestimonial: string;
    testimonialAuthor: string;

    /* ═════════════════════════════════════════════════════════════
       RESULTS / RECOMMENDATIONS
       ═════════════════════════════════════════════════════════════ */
    resultsTitle: string;
    resultsSubtitle: string;
    topMatch: string;
    seeOtherMatchesButton: string;

    /* ═════════════════════════════════════════════════════════════
       GENERAL UI / NAVIGATION
       ═════════════════════════════════════════════════════════════ */
    headerTitle: string;
    backButton: string;
    footerText: string;

    /* ═════════════════════════════════════════════════════════════
       LOADING & THANK YOU STATES
       ═════════════════════════════════════════════════════════════ */
    calculatingTitle: string;
    calculatingSubtitle: string;
    thankYouTitle: string;
    thankYouSubtitle: string;

    /* ═════════════════════════════════════════════════════════════
       FORMS & BOOKING
       ═════════════════════════════════════════════════════════════ */
    reserveTitle: string;
    reserveSubtitle: string;
    choosePrompt: string;
    yourName: string;
    yourContact: string;
    submitButton: string;
    submittingButton: string;
    formFinePrint: string;
    consentText: string;
    clickToSelect: string;

    /* ═════════════════════════════════════════════════════════════
       ERROR STATES
       ═════════════════════════════════════════════════════════════ */
    formError: string;
    devError: string;
    submitError: string;
    consentError: string;

    /* ═════════════════════════════════════════════════════════════
       LEGACY / FALLBACK KEYS
       ═════════════════════════════════════════════════════════════ */
    heroTitle: string;
    heroSubtitle: string;
    heroButton: string;

    /* ═════════════════════════════════════════════════════════════
       SEO METADATA
       ═════════════════════════════════════════════════════════════ */
    seo: SeoTranslations;
}

/* ─────────────────────────────────────────────────────────────────────────
   COMPONENT PROPS - BUTTON
   ───────────────────────────────────────────────────────────────────────── */

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'accent';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    loading?: boolean;
    children: React.ReactNode;
}

/* ─────────────────────────────────────────────────────────────────────────
   COMPONENT PROPS - CARD
   ───────────────────────────────────────────────────────────────────────── */

export type CardVariant = 'default' | 'secondary' | 'gradient';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    glowing?: boolean;
    interactive?: boolean;
    children: React.ReactNode;
}

/* ─────────────────────────────────────────────────────────────────────────
   COMPONENT PROPS - QUIZ OPTION
   ───────────────────────────────────────────────────────────────────────── */

export interface QuizOptionProps extends React.HTMLAttributes<HTMLDivElement> {
    option: QuestionOption;
    isSelected?: boolean;
    isActive?: boolean;
    isInactive?: boolean;
    onClick?: () => void;
}

/* ─────────────────────────────────────────────────────────────────────────
   DESIGN SYSTEM - COLOR PALETTE
   ───────────────────────────────────────────────────────────────────────── */

export type ColorName =
    | 'primary'           // Hot Pink (#FF006E)
    | 'primary-light'     // Lighter pink
    | 'secondary'         // Purple (#8338EC)
    | 'secondary-light'   // Lighter purple
    | 'accent'            // Neon Aqua (#06FFA5)
    | 'accent-light'      // Lighter aqua
    | 'signature'         // Electric Lime (#BEF264)
    | 'success'           // Green
    | 'warning'           // Amber
    | 'error'             // Red/Pink
    | 'info';             // Blue

export type GradientName =
    | 'primary'           // Hot Pink → Orange
    | 'secondary'         // Purple → Blue
    | 'accent';           // Lime → Aqua

export interface DesignTokens {
    colors: Record<ColorName, string>;
    gradients: Record<GradientName, string>;
    shadows: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    glows: {
        primary: string;
        secondary: string;
        accent: string;
    };
    spacing: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
    };
    radius: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
    };
    transitions: {
        fast: string;
        base: string;
        slow: string;
        bounce: string;
    };
}

/* ─────────────────────────────────────────────────────────────────────────
   ANIMATION TYPES
   ───────────────────────────────────────────────────────────────────────── */

export type AnimationName =
    | 'slide-up-fade-in'
    | 'float'
    | 'pulse-glow'
    | 'ripple'
    | 'bounce'
    | 'scale-pulse'
    | 'shimmer'
    | 'marquee-scroll'
    | 'confetti-fall'
    | 'text-glow-pulse';

export interface AnimationConfig {
    name: AnimationName;
    duration?: 'fast' | 'base' | 'slow';
    delay?: number;
    iterationCount?: 'infinite' | number;
    fillMode?: 'forwards' | 'backwards' | 'both';
}

/* ─────────────────────────────────────────────────────────────────────────
   QUIZ CONTEXT
   ───────────────────────────────────────────────────────────────────────── */

export interface QuizContextType {
    answers: Answers;
    updateAnswer: (questionId: string, answer: string) => void;
    resetAnswers: () => void;
    removeAnswer: (questionId: string) => void;
}

/* ─────────────────────────────────────────────────────────────────────────
   UTILITY TYPES
   ───────────────────────────────────────────────────────────────────────── */

/**
 * Make all properties of T optional
 */
export type Partial<T> = {
    [P in keyof T]?: T[P];
};

/**
 * Make all properties of T required
 */
export type Required<T> = {
    [P in keyof T]-?: T[P];
};

/**
 * Extract the type of a function's return value
 */
export type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

/* ─────────────────────────────────────────────────────────────────────────
   API & DATA TYPES
   ───────────────────────────────────────────────────────────────────────── */

export interface BookingData {
    universityId: string;
    userName: string;
    userContact: string;
    timestamp: string;
}

export interface RecommendationResult {
    universities: University[];
    topMatch: University;
    scores: Record<string, number>;
}

/* ─────────────────────────────────────────────────────────────────────────
   ERROR HANDLING
   ───────────────────────────────────────────────────────────────────────── */

export class AppError extends Error {
    code: string;
    statusCode?: number;

    constructor(message: string, code: string, statusCode?: number) {
        super(message);
        this.code = code;
        this.statusCode = statusCode;
        this.name = 'AppError';
    }
}

export type ErrorType = 'validation' | 'network' | 'server' | 'unknown';

export interface ErrorResponse {
    type: ErrorType;
    message: string;
    code?: string;
    details?: Record<string, any>;
}

/* ─────────────────────────────────────────────────────────────────────────
   RESPONSIVE BREAKPOINTS
   ───────────────────────────────────────────────────────────────────────── */

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export const BREAKPOINTS: Record<Breakpoint, number> = {
    xs: 320,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
};

/* ─────────────────────────────────────────────────────────────────────────
   LOCAL STORAGE KEYS
   ───────────────────────────────────────────────────────────────────────── */

export const LOCAL_STORAGE_KEYS = {
    QUIZ_ANSWERS: 'quizAnswers',
    CURRENT_QUESTION_INDEX: 'currentQuestionIndex',
    APP_STATE: 'appState',
    RECOMMENDATIONS: 'recommendations',
    USER_LANGUAGE: 'userLanguage',
    THEME_PREFERENCE: 'themePreference',
} as const;

/* ─────────────────────────────────────────────────────────────────────────
   EVENT TYPES
   ───────────────────────────────────────────────────────────────────────── */

export interface QuizAnswerEvent {
    questionId: string;
    answer: string;
    timestamp: number;
}

export interface NavigationEvent {
    from: AppState;
    to: AppState;
    timestamp: number;
}

export interface BookingEvent {
    universityId: string;
    timestamp: number;
}

/* ═══════════════════════════════════════════════════════════════════════════
   END OF TYPE DEFINITIONS
   ═══════════════════════════════════════════════════════════════════════════ */