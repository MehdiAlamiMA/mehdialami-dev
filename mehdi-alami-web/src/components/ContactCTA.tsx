
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { routes, type Language } from '../config/routes'
import './ContactCTA.css'

function ContactCTA() {
    const { t } = useTranslation()
    const { pathname } = useLocation()

    const language: Language =
        pathname.startsWith('/de/') ? 'de' :
            pathname.startsWith('/br/') ? 'pt-BR' :
                'en'

    return (
        <section className="projects-cta">
            <div className="projects-cta-inner">
                <p>{t('projects.cta.text')}</p>

                <Link to={routes[language].contact}>
                    {t('projects.cta.link')}
                    <span>↗</span>
                </Link>
            </div>
        </section>
    )
}

export default ContactCTA
