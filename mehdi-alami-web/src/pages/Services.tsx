import { useTranslation } from 'react-i18next'

function Services() {
    const { t } = useTranslation()

    return (
        <main>
            <section>
                <h1>{t('services.title')}</h1>
                <p>{t('services.intro')}</p>
            </section>

            <section>
                <article>
                    <h2>{t('home.services.wordpress.title')}</h2>
                    <p>{t('home.services.wordpress.description')}</p>
                </article>

                <article>
                    <h2>{t('home.services.dotnet.title')}</h2>
                    <p>{t('home.services.dotnet.description')}</p>
                </article>
            </section>
        </main>
    )
}

export default Services