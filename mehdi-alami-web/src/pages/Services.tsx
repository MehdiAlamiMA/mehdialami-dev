import { useTranslation } from 'react-i18next'
import './Services.css'
import ContactCTA from '../components/ContactCTA'

function Services() {
    const { t } = useTranslation()

    return (
        <>
            <section className="services-page-hero">
                <span>{t('servicesPage.label')}</span>
                <h1>{t('servicesPage.title')}</h1>
                <p>{t('servicesPage.intro')}</p>
            </section>

            <section className="service-page-item">
                <div className="service-page-number">01</div>

                <div className="service-page-content">
                    <div className="service-page-heading">
                        <span>{t('servicesPage.items.build.label')}</span>
                        <h2>{t('servicesPage.items.build.title')}</h2>
                    </div>

                    <div className="service-page-details">
                        <p>{t('servicesPage.items.build.description')}</p>

                        <div className="service-page-meta">
                            {t('servicesPage.items.build.meta')}
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-page-item">
                <div className="service-page-number">02</div>

                <div className="service-page-content">
                    <div className="service-page-heading">
                        <span>{t('servicesPage.items.improve.label')}</span>
                        <h2>{t('servicesPage.items.improve.title')}</h2>
                    </div>

                    <div className="service-page-details">
                        <p>{t('servicesPage.items.improve.description')}</p>

                        <div className="service-page-meta">
                            {t('servicesPage.items.improve.meta')}
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-page-item">
                <div className="service-page-number">03</div>

                <div className="service-page-content">
                    <div className="service-page-heading">
                        <span>{t('servicesPage.items.integrate.label')}</span>
                        <h2>{t('servicesPage.items.integrate.title')}</h2>
                    </div>

                    <div className="service-page-details">
                        <p>{t('servicesPage.items.integrate.description')}</p>

                        <div className="service-page-meta">
                            {t('servicesPage.items.integrate.meta')}
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-page-item">
                <div className="service-page-number">04</div>

                <div className="service-page-content">
                    <div className="service-page-heading">
                        <span>{t('servicesPage.items.maintain.label')}</span>
                        <h2>{t('servicesPage.items.maintain.title')}</h2>
                    </div>

                    <div className="service-page-details">
                        <p>{t('servicesPage.items.maintain.description')}</p>

                        <div className="service-page-meta">
                            {t('servicesPage.items.maintain.meta')}
                        </div>
                    </div>
                </div>
            </section>

            <ContactCTA />
        </>
    )
}

export default Services