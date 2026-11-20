import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { routes, type Language, type Page } from '../config/routes'

function LanguageSwitcher() {
    const { i18n } = useTranslation()
    const location = useLocation()
    const navigate = useNavigate()

    const languages: { code: Language; label: string }[] = [
        { code: 'en', label: 'EN' },
        { code: 'de', label: 'DE' },
        { code: 'pt-BR', label: 'BR' },
    ]

    const currentLanguage: Language =
        location.pathname.startsWith('/de/') ? 'de' :
            location.pathname.startsWith('/br/') ? 'pt-BR' :
                'en'

    const currentPage: Page =
        (Object.keys(routes[currentLanguage]) as Page[]).find(
            (page) => routes[currentLanguage][page] === location.pathname
        ) || 'home'

    const changeLanguage = (language: Language) => {
        localStorage.setItem('language', language)
        void i18n.changeLanguage(language)

        navigate(
            routes[language][currentPage] +
            location.search +
            location.hash
        )
    }

    return (
        <div className="language-switcher">
            {languages
                .filter((language) => language.code !== currentLanguage)
                .map((language) => (
                    <button
                        key={language.code}
                        type="button"
                        onClick={() => changeLanguage(language.code)}
                    >
                        {language.label}
                    </button>
                ))}
        </div>
    )
}

export default LanguageSwitcher