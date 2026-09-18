import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

function Header() {
    const { t } = useTranslation()

    return (
        <header>
            <Link to="/">Mehdi Alami</Link>

            <nav>
                <Link to="/projects">{t('navigation.projects')}</Link>
                <Link to="/services">{t('navigation.services')}</Link>
                <Link to="/about">{t('navigation.about')}</Link>
                <Link to="/contact">{t('navigation.contact')}</Link>
            </nav>
            <LanguageSwitcher />
        </header>
    )
}

export default Header