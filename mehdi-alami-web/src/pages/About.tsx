import { useTranslation } from 'react-i18next'
import './About.css'
import ContactCTA from '../components/ContactCTA'

function About() {
    const { t } = useTranslation()

    return (
        <main>
            <section className="about-hero">
                <div className="about-hero-inner">
                    <span className="about-hero-label">
                        {t('aboutPage.label')}
                    </span>

                    <h1>
                        <span>
                            <strong>{t('aboutPage.highlight0')}</strong>
                            {' '}{t('aboutPage.titleLine1')}
                        </span>
                        <span>
                            <strong>{t('aboutPage.highlight1')}</strong>
                            {' '}{t('aboutPage.titleLine2')}
                        </span>
                        <span>
                            {t('aboutPage.titleLine3')}{' '}
                            <strong>{t('aboutPage.highlight2')}</strong>
                        </span>
                    </h1>

                    <p>{t('aboutPage.intro')}</p>
                </div>
            </section>

            <section className="about-approach">
                <div className="about-approach-label">
                    <span>01</span>
                    <span>{t('aboutPage.approach.label')}</span>
                </div>

                <div className="about-approach-content">
                    <h2>{t('aboutPage.approach.title')}</h2>

                    <div className="about-approach-text">
                        <p>{t('aboutPage.approach.text1')}</p>
                        <p>{t('aboutPage.approach.text2')}</p>
                    </div>
                </div>
            </section>

            <section className="about-background">
                <div className="about-background-label">
                    <span>02</span>
                    <span>{t('aboutPage.background.label')}</span>
                </div>

                <div className="about-background-content">
                    <h2>{t('aboutPage.background.title')}</h2>

                    <div className="about-background-text">
                        <p>{t('aboutPage.background.text1')}</p>
                        <p>{t('aboutPage.background.text2')}</p>
                    </div>
                </div>
            </section>

            <section className="about-stack">
                <div className="about-stack-label">
                    <span>03</span>
                    <span>{t('aboutPage.stack.label')}</span>
                </div>

                <div className="about-stack-content">
                    <h2>{t('aboutPage.stack.title')}</h2>

                    <div className="about-stack-list">
                        <span>WordPress</span>
                        <span>PHP</span>
                        <span>JavaScript</span>
                        <span>TypeScript</span>
                        <span>React</span>
                        <span>C#</span>
                        <span>ASP.NET Core</span>
                        <span>SQL / EF Core</span>
                        <span>REST APIs</span>
                    </div>
                </div>
            </section>
            <ContactCTA />
        </main>
    )
}

export default About