import React from 'react';
//import Header from '../components/Header';
//import Footer from '../components/Footer';
//import ValueSection from '../components/ValueSection';
import UniversitySection from '../components/UniversitySection';
import BackgroundShapes from '../components/BackgroundShapes';
import ValueCards from "../components/ValueCards.jsx";
import LanguageSwitch from "../components/LanguageSwitch.jsx";
import ThemeToggle from "../components/ThemeToggle.jsx";
import Hero from "../components/Hero.jsx";
import FormSection from "../components/FormSection.jsx";



export default function HomePage({t, lang, setLang}) {


    return (
        <>
            <header className="header">
                <div className="container header-inner">
                    <div className="brand">
                        <span className="logo" aria-hidden>🎓</span>
                        <span>{t.brand}</span>
                    </div>
                    <div className="header-inner">
                        <LanguageSwitch lang={lang} onChange={setLang}/>
                        <ThemeToggle/>
                    </div>
                </div>
            </header>

            <main>
                <BackgroundShapes/>

                <section className="hero">
                    <div className="container">
                        <Hero t={t}/>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <h2>{t.value_title}</h2>
                        <ValueCards t={t}/>
                    </div>
                </section>

                <UniversitySection t={t}/>


                <section id="waitlist" className="section">
                    <div className="container">
                        <h2>{t.form_title}</h2>
                        <p style={{color: 'var(--sub)', marginTop: 0}}>{t.form_lead}</p>
                        <div className="form-wrap">
                            <FormSection t={t}/>
                        </div>
                        <p className="note">{t.note}</p>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="container">
                    <p>
                        &copy; {new Date().getFullYear()} {t.brand}.{' '}
                        <a href={`${import.meta.env.BASE_URL}privacy.html`} target="_blank" rel="noreferrer">
                            {t.privacy}
                        </a>
                    </p>
                    <p>
                        {t.contact}
                        <a href="mailto:hello@your-domain.uz">hello@your-domain.uz</a> · Telegram:{' '}
                        <a href="https://t.me/yourchannel" target="_blank" rel="noreferrer">@yourchannel</a>
                    </p>
                </div>
            </footer>
        </>
    );
}