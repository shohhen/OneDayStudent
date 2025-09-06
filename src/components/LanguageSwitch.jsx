import React from 'react'

export default function LanguageSwitch({ lang, onChange }) {
    return (
        <nav className="lang-switch" aria-label="Language">
            {['uz','ru','en'].map(code => (
                <button
                    key={code}
                    data-lang={code}
                    className={lang === code ? 'active' : ''}
                    onClick={() => onChange(code)}
                    type="button"
                >
                    {code.toUpperCase()}
                </button>
            ))}
        </nav>
    )
}