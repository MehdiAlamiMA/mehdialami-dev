import { useTranslation } from 'react-i18next'

function Projects() {
    const { t } = useTranslation()

    return (
        <main>
            <section>
                <h1>{t('projects.title')}</h1>
                <p>{t('projects.intro')}</p>
            </section>

            <section>
                <article>
                    <h2>{t('home.projects.items.digitalBundleBuilder.title')}</h2>
                    <p>{t('home.projects.items.digitalBundleBuilder.description')}</p>
                    <p>{t('home.projects.items.digitalBundleBuilder.technologies')}</p>
                </article>

                <article>
                    <h2>{t('home.projects.items.photoOptimizer.title')}</h2>
                    <p>{t('home.projects.items.photoOptimizer.description')}</p>
                    <p>{t('home.projects.items.photoOptimizer.technologies')}</p>
                </article>

                <article>
                    <h2>{t('home.projects.items.engelApotheke.title')}</h2>
                    <p>{t('home.projects.items.engelApotheke.description')}</p>
                    <p>{t('home.projects.items.engelApotheke.technologies')}</p>
                </article>
            </section>

        </main>
    )
}

export default Projects