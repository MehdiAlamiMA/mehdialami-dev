
import { useLocation } from 'react-router-dom'
import { routes, type Language, type Page } from '../config/routes'

const siteUrl = 'https://mehdialami.dev'

const metadata: Record<Language, Record<Page, {
    title: string
    description: string
}>> = {
    en: {
        home: {
            title: 'Mehdi Alami | WordPress & Full-Stack Developer',
            description: 'Freelance WordPress and full-stack developer specializing in PHP, React and ASP.NET Core. Websites, custom plugins and web applications.',
        },
        projects: {
            title: 'Projects & Portfolio | Mehdi Alami',
            description: 'Explore WordPress websites, custom plugins and web development projects built by Mehdi Alami.',
        },
        services: {
            title: 'Web Development Services | Mehdi Alami',
            description: 'WordPress development, website optimization, API integrations and ongoing maintenance for businesses and agencies.',
        },
        about: {
            title: 'About Mehdi Alami | Freelance Web Developer',
            description: 'Learn about Mehdi Alami, a freelance developer specializing in WordPress, PHP, React and ASP.NET Core.',
        },
        contact: {
            title: 'Contact Mehdi Alami | Web Development',
            description: 'Contact Mehdi Alami for freelance WordPress development, custom web applications and technical collaboration.',
        },
    },
    de: {
        home: {
            title: 'Mehdi Alami | WordPress- & Full-Stack-Entwickler',
            description: 'Freiberuflicher WordPress- und Full-Stack-Entwickler für PHP, React und ASP.NET Core. Websites, individuelle Plugins und Webanwendungen.',
        },
        projects: {
            title: 'Projekte & Referenzen | Mehdi Alami',
            description: 'Entdecken Sie WordPress-Websites, individuelle Plugins und Webentwicklungsprojekte von Mehdi Alami.',
        },
        services: {
            title: 'Webentwicklung & WordPress-Leistungen | Mehdi Alami',
            description: 'WordPress-Entwicklung, Website-Optimierung, API-Integrationen und laufende Wartung für Unternehmen und Agenturen.',
        },
        about: {
            title: 'Über mich | Mehdi Alami – Webentwickler',
            description: 'Erfahren Sie mehr über Mehdi Alami, freiberuflicher Entwickler für WordPress, PHP, React und ASP.NET Core.',
        },
        contact: {
            title: 'Kontakt | Mehdi Alami – Webentwicklung',
            description: 'Kontaktieren Sie Mehdi Alami für WordPress-Entwicklung, individuelle Webanwendungen und technische Zusammenarbeit.',
        },
    },
    'pt-BR': {
        home: {
            title: 'Mehdi Alami | Desenvolvedor WordPress e Full-Stack',
            description: 'Desenvolvedor freelancer especializado em WordPress, PHP, React e ASP.NET Core. Sites, plugins personalizados e aplicações web.',
        },
        projects: {
            title: 'Projetos e Portfólio | Mehdi Alami',
            description: 'Conheça projetos de sites WordPress, plugins personalizados e desenvolvimento web realizados por Mehdi Alami.',
        },
        services: {
            title: 'Serviços de Desenvolvimento Web | Mehdi Alami',
            description: 'Desenvolvimento WordPress, otimização de sites, integrações de APIs e manutenção contínua para empresas e agências.',
        },
        about: {
            title: 'Sobre Mim | Mehdi Alami – Desenvolvedor Web',
            description: 'Conheça Mehdi Alami, desenvolvedor freelancer especializado em WordPress, PHP, React e ASP.NET Core.',
        },
        contact: {
            title: 'Contato | Mehdi Alami – Desenvolvimento Web',
            description: 'Entre em contato com Mehdi Alami para desenvolvimento WordPress, aplicações web e colaborações técnicas.',
        },
    },
}

function SEO() {
    const { pathname } = useLocation()

    const current = (Object.keys(routes) as Language[])
        .flatMap((language) =>
            (Object.keys(routes[language]) as Page[]).map((page) => ({
                language,
                page,
                path: routes[language][page],
            }))
        )
        .find((route) => route.path === pathname)

    if (!current) return null

    const { title, description } = metadata[current.language][current.page]
    const url = `${siteUrl}${current.path}`

    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Mehdi Alami',
        jobTitle: 'Full-Stack Web Developer',
        url: 'https://mehdialami.dev',
        knowsAbout: [
            'WordPress',
            'PHP',
            'React',
            'TypeScript',
            'C#',
            'ASP.NET Core',
        ],
    }

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Mehdi Alami',
        url: 'https://mehdialami.dev',
        inLanguage: ['en', 'de', 'pt-BR'],
    }

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Web Development Services',
        serviceType: [
            'Full-Stack Web Development',
            'WordPress Development',
            'Custom Plugin Development',
            'API Integration',
            'Website Maintenance',
        ],
        provider: {
            '@type': 'Person',
            name: 'Mehdi Alami',
            url: 'https://mehdialami.dev',
        },
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@graph': [
                            personSchema,
                            websiteSchema,
                            serviceSchema,
                        ],
                    }),
                }}
            />
            <title>{title}</title>
            <meta name="description" content={description} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />

            <link rel="canonical" href={url} />

            <link rel="alternate" hrefLang="en"
                href={`${siteUrl}${routes.en[current.page]}`} />
            <link rel="alternate" hrefLang="de"
                href={`${siteUrl}${routes.de[current.page]}`} />
            <link rel="alternate" hrefLang="pt-BR"
                href={`${siteUrl}${routes['pt-BR'][current.page]}`} />
            <link rel="alternate" hrefLang="x-default"
                href={`${siteUrl}${routes.en[current.page]}`} />
        </>
    )
}

export default SEO
