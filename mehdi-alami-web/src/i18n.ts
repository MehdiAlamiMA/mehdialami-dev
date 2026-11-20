import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en'
import de from './locales/de'
import ptBR from './locales/pt-BR'

const getInitialLanguage = () => {
    if (typeof window === 'undefined') {
        return 'en'
    }

    const pathname = window.location.pathname

    if (pathname === '/de' || pathname.startsWith('/de/')) {
        return 'de'
    }

    if (pathname === '/br' || pathname.startsWith('/br/')) {
        return 'pt-BR'
    }

    return 'en'
}

void i18n
    .use(initReactI18next)
    .init({
        lng: getInitialLanguage(),
        fallbackLng: 'en',
        supportedLngs: ['en', 'de', 'pt-BR'],

        resources: {
            en: { translation: en },
            de: { translation: de },
            'pt-BR': { translation: ptBR },
        },

        interpolation: {
            escapeValue: false,
        },

        initAsync: false,
    })

export default i18n