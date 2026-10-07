import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Contact.css'

function Contact() {
    const { t } = useTranslation()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [website, setWebsite] = useState('')
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    website,
                }),
            })

            if (response.ok) {
                setSuccess(true)
                setError(false)
                setName('')
                setEmail('')
                setMessage('')
            } else {
                setSuccess(false)
                setError(true)
            }
        } catch {
            setSuccess(false)
            setError(true)
        }
    }

    return (
        <main>
            <section className="contact-page">
                <div className="contact-intro">
                    <span>{t('contactPage.label')}</span>

                    <h1>{t('contactPage.title')}</h1>

                    <p>{t('contactPage.intro')}</p>
                </div>
            </section>

            <section className="contact-form-section">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">{t('contactPage.form.name')}</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />    
                    </div>

                    <div>
                        <label htmlFor="email">{t('contactPage.form.email')}</label>
                        <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    <div>
                        <label htmlFor="message">{t('contactPage.form.message')}</label>
                        <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />

                    </div>
                    <div className="contact-extra-field" aria-hidden="true">
                        <label htmlFor="website">Website</label>
                        <input
                            id="website"
                            name="website"
                            type="text"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                            tabIndex={-1}
                            autoComplete="off"
                        />
                    </div>

                    <button type="submit">{t('contactPage.form.submit')}</button>
                    {success && (
                        <p className="contact-success">
                            {t('contactPage.form.success')}
                        </p>
                    )}
                    {error && (
                        <p className="contact-error">
                            {t('contactPage.form.error')}
                        </p>
                    )}
                </form>
            </section>
        </main>
    )
}

export default Contact