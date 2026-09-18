import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en'
import de from './locales/de'
import ptBR from './locales/pt-BR'

i18n
    .use(initReactI18next)
    .init({
        lng: localStorage.getItem('language') || 'en',
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