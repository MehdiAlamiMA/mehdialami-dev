import { useTranslation } from 'react-i18next'
import './Projects.css'
import bundleBuilderImage from '../assets/projects/projectspage-bundle-builder.jpg'
import photoOptimizerImage from '../assets/projects/photo-optimizer.jpg'
import notarhubImage from '../assets/projects/Notarhub.jpg'
import ewsImage from '../assets/projects/ews-projects.jpg'
import padeffkeImage from '../assets/projects/padeffke.jpg'
import ContactCTA from '../components/ContactCTA'

function Projects() {
    const { t } = useTranslation()

    return (
        <main>
            <section className="projects-hero">
                <span>{t('projects.label')}</span>
                <h1>{t('projects.title')}</h1>
                <p>{t('projects.intro')}</p>
            </section>

            <section className="projects-list">

                <article className="project-detail">
                    <div className="project-detail-number">01</div>

                    <div className="project-detail-image">
                        <img
                            src={padeffkeImage}
                            alt="Bäckerei Padeffke website"
                        />
                    </div>

                    <div className="project-detail-content">
                        <span className="project-detail-type">
                            {t('projects.items.padeffke.type')}
                        </span>

                        <h2>{t('projects.items.padeffke.title')}</h2>

                        <p className="project-detail-description">
                            {t('projects.items.padeffke.description')}
                        </p>

                        <div className="project-detail-info">
                            <div>
                                <span>{t('projects.role')}</span>
                                <p>{t('projects.items.padeffke.role')}</p>
                            </div>

                            <div>
                                <span>{t('projects.technologies')}</span>
                                <p>{t('projects.items.padeffke.technologies')}</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="project-detail">
                    <div className="project-detail-number">02</div>

                    <div className="project-detail-image">
                        <img
                            src={notarhubImage}
                            alt="NotarHub website"
                        />
                    </div>

                    <div className="project-detail-content">
                        <span className="project-detail-type">
                            {t('projects.items.notarhub.type')}
                        </span>

                        <h2>{t('projects.items.notarhub.title')}</h2>

                        <p className="project-detail-description">
                            {t('projects.items.notarhub.description')}
                        </p>

                        <div className="project-detail-info">
                            <div>
                                <span>{t('projects.role')}</span>
                                <p>{t('projects.items.notarhub.role')}</p>
                            </div>

                            <div>
                                <span>{t('projects.technologies')}</span>
                                <p>{t('projects.items.notarhub.technologies')}</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="project-detail">
                    <div className="project-detail-number">03</div>

                    <div className="project-detail-image">
                        <img
                            src={bundleBuilderImage}
                            alt="WooCommerce Digital Bundle Builder"
                        />
                    </div>

                    <div className="project-detail-content">
                        <span className="project-detail-type">
                            {t('projects.items.digitalBundleBuilder.type')}
                        </span>

                        <h2>
                            {t('projects.items.digitalBundleBuilder.title')}
                        </h2>

                        <p className="project-detail-description">
                            {t('projects.items.digitalBundleBuilder.description')}
                        </p>

                        <div className="project-detail-info">
                            <div>
                                <span>{t('projects.role')}</span>
                                <p>{t('projects.items.digitalBundleBuilder.role')}</p>
                            </div>

                            <div>
                                <span>{t('projects.technologies')}</span>
                                <p>{t('projects.items.digitalBundleBuilder.technologies')}</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="project-detail">
                    <div className="project-detail-number">04</div>

                    <div className="project-detail-image">
                        <img
                            src={ewsImage}
                            alt="Ewald W. Schneider website"
                        />
                    </div>

                    <div className="project-detail-content">
                        <span className="project-detail-type">
                            {t('projects.items.ews.type')}
                        </span>

                        <h2>{t('projects.items.ews.title')}</h2>

                        <p className="project-detail-description">
                            {t('projects.items.ews.description')}
                        </p>

                        <div className="project-detail-info">
                            <div>
                                <span>{t('projects.role')}</span>
                                <p>{t('projects.items.ews.role')}</p>
                            </div>

                            <div>
                                <span>{t('projects.technologies')}</span>
                                <p>{t('projects.items.ews.technologies')}</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="project-detail">
                    <div className="project-detail-number">05</div>
                    <div className="project-detail-image">
                        <img
                            src={photoOptimizerImage}
                            alt="Photo Optimizer WordPress plugin"
                        />
                    </div>

                    <div className="project-detail-content">
                        <span className="project-detail-type">
                            {t('projects.items.photoOptimizer.type')}
                        </span>

                        <h2>{t('projects.items.photoOptimizer.title')}</h2>

                        <p className="project-detail-description">
                            {t('projects.items.photoOptimizer.description')}
                        </p>

                        <div className="project-detail-info">
                            <div>
                                <span>{t('projects.role')}</span>
                                <p>{t('projects.items.photoOptimizer.role')}</p>
                            </div>

                            <div>
                                <span>{t('projects.technologies')}</span>
                                <p>{t('projects.items.photoOptimizer.technologies')}</p>
                            </div>
                        </div>
                    </div>
                   
                </article>

            </section>

            <ContactCTA />

        </main>
    )
}

export default Projects