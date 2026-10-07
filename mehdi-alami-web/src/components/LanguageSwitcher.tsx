import { useTranslation } from 'react-i18next'

function LanguageSwitcher() {
    const { i18n } = useTranslation()

    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'de', label: 'DE' },
        { code: 'pt-BR', label: 'BR' },
    ]

    const currentLanguage = i18n.resolvedLanguage || i18n.language

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language)
        localStorage.setItem('language', language)
    }

    return (
        <div className="language-switcher">
            {languages
                .filter((language) => language.code !== currentLanguage)
                .map((language) => (
                    <button
                        key={language.code}
                        onClick={() => changeLanguage(language.code)}
                    >
                        {language.label}
                    </button>
                ))}
        </div>
    )
}

export default LanguageSwitcher