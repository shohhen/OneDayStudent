import React, {Suspense, lazy, useState, useMemo, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeToggle';
import './i18n';
import {translations} from "./translations.js"; // Import i18n configuration

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const UniversitiesPage = lazy(() => import('./pages/UniversitiesListPage'));

const DEFAULT_LANG = import.meta.env.VITE_DEFAULT_LANG || 'uz'

function detectInitialLang() {
    const params = new URLSearchParams(location.search)
    const urlLang = params.get('lang')
    if (urlLang && ['uz','ru','en'].includes(urlLang)) return urlLang
    const stored = localStorage.getItem('lang')
    if (stored && ['uz','ru','en'].includes(stored)) return stored
    const nav = navigator.language?.toLowerCase() || ''
    if (nav.startsWith('ru')) return 'ru'
    if (nav.startsWith('en')) return 'en'
    return DEFAULT_LANG
}

// Loading fallback component
const LoadingFallback = () => (
    <div className="loading-fallback">
        <div className="spinner"></div>
    </div>
);

function App() {

    const [lang, setLang] = useState(detectInitialLang()) || DEFAULT_LANG
    const t = useMemo(() => translations[lang] || translations.uz, [lang])

    useEffect(() => {
        localStorage.setItem('lang', lang)
        document.documentElement.lang = lang
        document.title = t.meta_title
    }, [lang, t.meta_title])


    return (
        <>
            <ThemeProvider>
                <Router>
                    <Suspense fallback={<LoadingFallback />}>
                        <Routes>
                            <Route path="/" element={<HomePage t={t} lang={lang} setLang={setLang} />} />
                            <Route
                                path="/universities"
                                element={
                                    <>
                                        <UniversitiesPage t={t} lang={lang} setLang={setLang} />
                                    </>
                                }
                            />
                        </Routes>
                    </Suspense>
                </Router>
            </ThemeProvider>
        </>
    );
}

export default App;