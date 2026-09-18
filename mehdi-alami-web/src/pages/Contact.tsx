import { useTranslation } from 'react-i18next'

function Contact() {
    const { t } = useTranslation()

    return (
        <main>
            <section>
                <h1>{t('contact.title')}</h1>
                <p>{t('contact.intro')}</p>
            </section>

            <section>
                <form>
                    <div>
                        <label htmlFor="name">{t('contact.form.name')}</label>
                        <input id="name" name="name" type="text" />
                    </div>

                    <div>
                        <label htmlFor="email">{t('contact.form.email')}</label>
                        <input id="email" name="email" type="email" />
                    </div>

                    <div>
                        <label htmlFor="message">{t('contact.form.message')}</label>
                        <textarea id="message" name="message" />

                    </div>

                    <button type="submit">{t('contact.form.submit')}</button>
                </form>
            </section>
        </main>
    )
}

export default Contact