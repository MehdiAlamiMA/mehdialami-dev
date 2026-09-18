import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Home() {
    const { t } = useTranslation()

    return (
        <main>
            <section>
                <h1>{t('home.hero.name')}</h1>
                <h2>{t('home.hero.title')}</h2>
                <p>{t('home.hero.description')}</p>
                <div>
                    <Link to="/projects">{t('home.hero.projectsButton')}</Link>
                    <Link to="/contact">{t('home.hero.contactButton')}</Link>
                </div>
            </section>

            <section>
                <h2>{t('home.projects.title')}</h2>
                <article>
                    <h3>{t('home.projects.items.digitalBundleBuilder.title')}</h3>
                    <p>{t('home.projects.items.digitalBundleBuilder.description')}</p>
                    <p>{t('home.projects.items.digitalBundleBuilder.technologies')}</p>
                </article>
                <article>
                    <h3>{t('home.projects.items.photoOptimizer.title')}</h3>
                    <p>{t('home.projects.items.photoOptimizer.description')}</p>
                    <p>{t('home.projects.items.photoOptimizer.technologies')}</p>
                </article>
                <article>
                    <h3>{t('home.projects.items.engelApotheke.title')}</h3>
                    <p>{t('home.projects.items.engelApotheke.description')}</p>
                    <p>{t('home.projects.items.engelApotheke.technologies')}</p>
                </article>
            </section>

            <section>
                <h2>{t('home.services.title')}</h2>
                <article>
                    <h3>{t('home.services.wordpress.title')}</h3>
                    <p>{t('home.services.wordpress.description')}</p>
                </article>

                <article>
                    <h3>{t('home.services.dotnet.title')}</h3>
                    <p>{t('home.services.dotnet.description')}</p>
                </article>
            </section>

            <section>
                <h2>{t('home.experience.title')}</h2>
                <p>{t('home.experience.companies')}</p>
            </section>

            <section>
                <h2>{t('home.about.title')}</h2>
                <p>{t('home.about.description')}</p>
                <Link to="/about">{t('home.about.link')}</Link>
            </section>

            <section>
                <h2>{t('home.contact.title')}</h2>
                <Link to="/contact">{t('home.contact.button')}</Link>
            </section>

        </main>
    )
}

export default Home