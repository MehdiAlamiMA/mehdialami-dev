import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en'
import de from './locales/de'
import ptBR from './locales/pt-BR'

const getInitialLanguage = () => {
    const savedLanguage = localStorage.getItem('language')

    if (savedLanguage) {
        return savedLanguage
    }

    const browserLanguage = navigator.language.toLowerCase()

    if (browserLanguage.startsWith('pt')) {
        return 'pt-BR'
    }

    if (browserLanguage.startsWith('de')) {
        return 'de'
    }

    return 'en'
}

i18n
    .use(initReactI18next)
    .init({
        lng: getInitialLanguage(),
        fallbackLng: 'en',

        resources: {
            en: {
                translation: en,
            },
            de: {
                translation: de,
            },
            'pt-BR': {
                translation: ptBR,
            },
        },

        interpolation: {
            escapeValue: false,
        },
    })

export default i18n