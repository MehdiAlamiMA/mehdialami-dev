import { useTranslation } from 'react-i18next'

function About() {
    const { t } = useTranslation()

    return (
        <main>
            <section>
                <h1>{t('about.title')}</h1>
                <p>{t('about.intro')}</p>
            </section>

            <section>
                <h2>{t('about.experience.title')}</h2>
                <p>{t('about.experience.text')}</p>
            </section>

            <section>
                <h2>{t('about.stack.title')}</h2>
                <p>{t('about.stack.technologies')}</p>
            </section>
        </main>
    )
}

export default About