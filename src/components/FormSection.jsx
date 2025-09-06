
import React, {useMemo, useState} from 'react';
import { GOOGLE_FORM_ACTION, GOOGLE_FORM_ENTRIES } from '../config/googleForm';
import { universities as universitiesData } from './UniversitySection';

export default function FormSection({ t }) {

    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        university: '',
        consent: false,
    });
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const uniOptions = useMemo(() => {
        return (universitiesData || []).map((u) => {
            const key = `universities.${u.id}.name`;
            const localized = t.universities[u.id].name;
            const name = localized === key ? (u.name) : localized;
            const label = `${u.acronym} — ${name}`;
            // Send a clean value to Google Forms; include acronym + name
            const value = `${u.acronym}`;
            return { id: u.id, label, value };
        });
    }, [t]);

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        setValues((v) => ({ ...v, [name]: type === 'checkbox' ? checked : value }));
    };

    const validate = () => {
        if (!values.name.trim()) return t.form.errors.nameRequired;
        if (!values.email.trim()) return t.form.errors.emailRequired;
        if (!values.consent) return t.form.errors.consentRequired;
        return '';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: '', message: '' });

        const error = validate();
        if (error) {
            setStatus({ type: 'error', message: error });
            return;
        }

        setSubmitting(true);
        try {
            const params = new URLSearchParams();
            params.append(GOOGLE_FORM_ENTRIES.name, values.name);
            params.append(GOOGLE_FORM_ENTRIES.email, values.email);
            if (values.phone) params.append(GOOGLE_FORM_ENTRIES.phone, values.phone);
            if (values.university) params.append(GOOGLE_FORM_ENTRIES.university, values.university);
            params.append(GOOGLE_FORM_ENTRIES.consent, values.consent && "I agree" );

            // Google Forms blocks CORS; use no-cors. We cannot read the response,
            // but if the network request is OK we show a success message.
            await fetch(GOOGLE_FORM_ACTION, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                },
                body: params.toString(),
            });

            setStatus({ type: 'success', message: t.form.success });
            setValues({
                name: '',
                email: '',
                phone: '',
                university: '',
                consent: false,
            });
            // eslint-disable-next-line no-unused-vars
        } catch (err) {
            setStatus({ type: 'error', message: t.form.error });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="section" id="form">
            <div className="container">
                    <form onSubmit={handleSubmit} className="ods-form" noValidate>
                        <div className="grid-2">
                            <div className="form-field">
                                <label htmlFor="ods_name">{t.form.labels.name}</label>
                                <input
                                    id="ods_name"
                                    name="name"
                                    type="text"
                                    placeholder={t.form.placeholders.name}
                                    value={values.name}
                                    onChange={onChange}
                                    required
                                />
                            </div>

                            <div className="form-field">
                                <label htmlFor="ods_email">{t.form.labels.email}</label>
                                <input
                                    id="ods_email"
                                    name="email"
                                    type="text"
                                    placeholder={t.form.placeholders.email}
                                    value={values.email}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid-2">
                            <div className="form-field">
                                <label htmlFor="ods_phone">{t.form.labels.phone}</label>
                                <input
                                    id="ods_phone"
                                    name="phone"
                                    type="tel"
                                    placeholder={t.form.placeholders.phone}
                                    value={values.phone}
                                    onChange={onChange}
                                />
                            </div>

                            <div className="form-field">
                                <label htmlFor="ods_university">{t.form.labels.university}</label>
                                <select
                                    id="ods_university"
                                    name="university"
                                    value={values.university}
                                    onChange={onChange}
                                >
                                    <option value="">
                                        {t.form.placeholders.university /* e.g., "Select university" */}
                                    </option>
                                    {uniOptions.map((opt) => (
                                        <option key={opt.id} value={opt.value}>
                                            {opt.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="consent-row">
                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    name="consent"
                                    checked={values.consent}
                                    onChange={onChange}
                                    aria-required="true"
                                />
                                <span>{t.form.labels.consent}</span>
                            </label>
                        </div>

                        {status.message ? (
                            <div className={`form-status ${status.type}`}>
                                {status.message}
                            </div>
                        ) : null}

                        <div className="actions">
                            <button
                                className="cta"
                                type="submit"
                                disabled={submitting}
                                aria-busy={submitting}
                            >
                                {submitting ? t.form.submitting : t.form.submit}
                            </button>
                        </div>
                    </form>
            </div>
        </section>
    );
}