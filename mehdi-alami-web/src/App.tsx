import './App.css'
import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import { routes, type Language } from './config/routes'
import SEO from './components/SEO'

function LocalizedPage({
    language,
    children,
}: {
    language: Language
    children: React.ReactNode
}) {
    const { i18n } = useTranslation()

    useEffect(() => {
        if (i18n.resolvedLanguage !== language) {
            void i18n.changeLanguage(language)
        }

        document.documentElement.lang = language
    }, [language, i18n])

    return (
        <>
            <SEO />
            <ScrollToTop />
            <Header />
            {children}
            <Footer />
        </>
    )
}

function LegacyRedirect() {
    const { pathname } = useLocation()

    const legacyPages: Record<string, keyof typeof routes.en> = {
        '/': 'home',
        '/projects': 'projects',
        '/services': 'services',
        '/about': 'about',
        '/contact': 'contact',
    }

    const page = legacyPages[pathname] || 'home'

    return <Navigate to={routes.en[page]} replace />
}

function App() {
    const components = {
        home: <Home />,
        projects: <Projects />,
        services: <Services />,
        about: <About />,
        contact: <Contact />,
    }

    return (
        <Routes>
            {(Object.keys(routes) as Language[]).flatMap((language) =>
                (Object.keys(components) as Array<keyof typeof components>).map(
                    (page) => (
                        <Route
                            key={`${language}-${page}`}
                            path={routes[language][page]}
                            element={
                                <LocalizedPage language={language}>
                                    {components[page]}
                                </LocalizedPage>
                            }
                        />
                    )
                )
            )}

            <Route path="/" element={<LegacyRedirect />} />
            <Route path="/projects" element={<LegacyRedirect />} />
            <Route path="/services" element={<LegacyRedirect />} />
            <Route path="/about" element={<LegacyRedirect />} />
            <Route path="/contact" element={<LegacyRedirect />} />
        </Routes>
    )
}

export default App