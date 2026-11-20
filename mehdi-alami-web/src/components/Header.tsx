import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import { routes, type Language } from '../config/routes'

function Header() {
    const { t } = useTranslation()
    const { pathname } = useLocation()

    const language: Language =
        pathname.startsWith('/de/') ? 'de' :
            pathname.startsWith('/br/') ? 'pt-BR' :
                'en'

    const links = routes[language]

    return (
        <header>
            <div className="header-inner">
                <Link to={links.home}>Mehdi Alami</Link>

                <nav>
                    <NavLink to={links.projects}>
                        {t('navigation.projects')}
                    </NavLink>
                    <NavLink to={links.services}>
                        {t('navigation.services')}
                    </NavLink>
                    <NavLink to={links.about}>
                        {t('navigation.about')}
                    </NavLink>
                    <NavLink to={links.contact}>
                        {t('navigation.contact')}
                    </NavLink>
                </nav>

                <LanguageSwitcher />
            </div>
        </header>
    )
}

export default Header