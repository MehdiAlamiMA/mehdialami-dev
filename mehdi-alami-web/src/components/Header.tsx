import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

function Header() {
    const { t } = useTranslation()

    return (
        <header>
            <div className="header-inner">
                <Link to="/">Mehdi Alami</Link>

                <nav>
                    <nav>
                        <NavLink to="/projects">{t('navigation.projects')}</NavLink>
                        <NavLink to="/services">{t('navigation.services')}</NavLink>
                        <NavLink to="/about">{t('navigation.about')}</NavLink>
                        <NavLink to="/contact">{t('navigation.contact')}</NavLink>
                    </nav>
                </nav>
                <LanguageSwitcher />
            </div>  
        </header>
    )
}

export default Header