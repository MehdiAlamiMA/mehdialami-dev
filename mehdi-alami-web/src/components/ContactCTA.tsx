import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './ContactCTA.css'

function ContactCTA() {
    const { t } = useTranslation()

    return (
        <section className="projects-cta">
            <div className="projects-cta-inner">
                <p>{t('projects.cta.text')}</p>

                <Link to="/contact">
                    {t('projects.cta.link')}
                    <span>↗</span>
                </Link>
            </div>
        </section>
    )
}

export default ContactCTA