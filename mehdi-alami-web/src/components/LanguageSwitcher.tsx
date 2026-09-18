import { useTranslation } from 'react-i18next'

function LanguageSwitcher() {
    const { i18n } = useTranslation()

    return (
        <div>
            <button onClick={() => {
                i18n.changeLanguage('en')
                localStorage.setItem('language', 'en')
            }}>EN</button>
            <button onClick={() => {
                i18n.changeLanguage('de')
                localStorage.setItem('language', 'de')
            }}>DE</button>
            <button onClick={() => {
                i18n.changeLanguage('pt-BR')
                localStorage.setItem('language', 'pt-BR')
            }}>PT</button>
        </div>
    )
}

export default LanguageSwitcher