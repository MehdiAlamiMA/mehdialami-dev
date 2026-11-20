export const routes = {
    en: {
        home: '/en/',
        projects: '/en/projects',
        services: '/en/services',
        about: '/en/about',
        contact: '/en/contact',
    },
    de: {
        home: '/de/',
        projects: '/de/projekte',
        services: '/de/leistungen',
        about: '/de/ueber-mich',
        contact: '/de/kontakt',
    },
    'pt-BR': {
        home: '/br/',
        projects: '/br/projetos',
        services: '/br/servicos',
        about: '/br/sobre',
        contact: '/br/contato',
    },
} as const

export type Language = keyof typeof routes
export type Page = keyof typeof routes.en

export const languagePrefixes: Record<Language, string> = {
    en: 'en',
    de: 'de',
    'pt-BR': 'br',
}

export function getLocalizedPath(
    language: Language,
    page: Page
): string {
    return routes[language][page]
}