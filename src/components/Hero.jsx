import React from 'react'
import Globe from './Globe.jsx'

export default function Hero({ t }) {
    return (
        <div className="hero-grid">
            <div className="copy">
                <h1>{t.headline}</h1>
                <p className="sub">{t.subhead}</p>
                <a href="#waitlist" className="cta">{t.cta}</a>
                <div className="badges">
                    <span>{t.badge1}</span>
                    <span>{t.badge2}</span>
                    <span>{t.badge3}</span>
                </div>
            </div>
            <div className="three-wrap" aria-hidden>
                <Globe words={[
                    'University', 'Education', 'Degree', 'Bachelor', 'Master', 'PhD',
                    'Scholarship', 'Student', 'International', 'Exchange', 'Campus',
                    'Study', 'Research', 'Learning', 'Academic', 'Career', 'Science',
                    'WIUT', 'MDIST', 'TUIT', 'IUT', 'TTPU', 'Webster', 'Turin'
                ]}
                       count={8}
                       radius={1.5}/>
            </div>
        </div>
    )
}