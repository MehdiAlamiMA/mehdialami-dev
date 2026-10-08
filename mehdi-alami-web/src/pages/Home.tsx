import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import bundleBuilderImage from '../assets/projects/bundle-builder.jpg'
import notarhubImage from '../assets/projects/Notarhub.jpg'
import ewsImage from '../assets/projects/ews.jpg'
import padeffkeImage from '../assets/projects/padeffke.jpg'

const testimonials = [
    {
        text: 'Mehdi unterstützt uns seit einiger Zeit erfolgreich als Freelancer im Bereich PHP und WordPress. Er hat uns bei zahlreichen Anpassungen und Erweiterungen von Features geholfen. Seine Arbeitsweise ist zuverlässig, und er erledigt Aufgaben sorgfältig und termingerecht. Hervorzuheben sind seine Erreichbarkeit, Kommunikationsfähigkeit und Transparenz. Bei Problemen ist Mehdi stets ansprechbar und recherchiert praktikable Lösungen. Wir schätzen ihn sowohl fachlich als auch menschlich.',
        author: 'Steve Günther',
        company: 'dpa-infocom GmbH',
    },
    {
        text: 'Mehdi hat unseren Konfigurator weiterentwickelt und mit seinen Skills auf ein beeindruckendes neues Level gebracht. Trotz Remote Work hatten wir eine fantastische Zusammenarbeit mit ihm, waren begeistert von seinem Einsatz sowie der Detailversessenheit und können ihn gerne weiterempfehlen. Besonders im Backendbereich ist er ein absoluter Crack und denkt den oft gewünschten Schritt weiter bzw. voraus.',
        author: 'Elias',
        company: 'DesignYourBike',
    },
    
    {
        text: 'Mehdi is a highly skilled software developer who delivers quality code.He has a positive attitude and worked well in a team taking the lead.He works hard to meet tight deadlines.',
        author: 'Program Manager',
        company: 'V12Software',
    },
    
    {
        text: 'Herr Alami war bei der Projektumsetzung sehr gewissenhaft und hat die Arbeiten selbstständig zu unserer vollsten Zufriedenheit erledigt. Immer wieder gerne.',
        author: 'Denis Satler',
        company: 'Zarenga GmbH',
    },
    {
        text: 'Es hat alles super geklappt und wir sind sehr zufrieden mit der Arbeit und dem Ergebnis! Alles sehr persönlich & unkompliziert. Herr Alami denkt mit und findet für jedes Problem eine Lösung! Kann ich nur empfehlen...',
        author: 'Mac Messerschmidt',
        company: 'Drop In Surfcamp Portugal',
    },      
    {
        text: 'Wir haben Mehdi Alami als sehr zuverlässigen und äusserst korrekten und freundlichen Partner kennen gelernt. Als ein Tattoostudio in Zürich mit unseren spezial Wünschen können wir immer auf Ihn zählen schnell und Pragmatisch setzt er unsere Wünsche um. Wir empfehlen Mehdi Alami sehr, stehen voll und ganz hinter seiner Arbeit und Kompetenz.',
        author: 'Ivan Muñoz Martinez',
        company: 'Bad Habits GmbH',
    },  
    {
        text: 'Sehr fix, gute Arbeit, schnelle Umsetzung, erkennt Probleme und findet Lösungen.',
        author: 'Ralf Schmitz',
        company: 'bundesgeschäftsstelle sicher-stark',
    },
    {
        text: 'Die Zusammenarbeit mit Mehdi Alami ist sehr effizient und konstruktiv. Er arbeitet sorgsam und nach Zeitplan und kommuniziert gut. Wir haben schon einige Projekte zusammen umgesetzt und sind sehr zufrieden.',
        author: 'Noël Girstmair',
        company: 'webundso GmbH',
    },
]

function Home() {
    const { t } = useTranslation()
    const [testimonialIndex, setTestimonialIndex] = useState(0)

    const testimonial = testimonials[testimonialIndex]

    const previousTestimonial = () => {
        setTestimonialIndex((current) =>
            current === 0 ? testimonials.length - 1 : current - 1
        )
    }

    const nextTestimonial = () => {
        setTestimonialIndex((current) =>
            current === testimonials.length - 1 ? 0 : current + 1
        )
    }

    return (
        <main>
            <section className="hero">
                <h1>
                    Making your website perform, <span>your business grow.</span>
                </h1>

                <p>{t('home.hero.description')}</p>

                <div className="hero-actions">
                    <Link to="/projects">{t('home.hero.projectsButton')}</Link>
                    <Link to="/contact">{t('home.hero.contactButton')}</Link>
                </div>
            </section>

            <section className="services-section">
                <h2>{t('home.services.title')}</h2>

                <div className="intro-section">
                    <div className="services-grid">
                        <article className="service-card">
                            <span className="service-number">01</span>
                            <h3>{t('home.services.build.title')}</h3>
                            <span className="service-meta">
                                {t('home.services.build.meta')}
                            </span>
                            <p>{t('home.services.build.description')}</p>
                        </article>

                        <article className="service-card">
                            <span className="service-number">02</span>
                            <h3>{t('home.services.improve.title')}</h3>
                            <span className="service-meta">
                                {t('home.services.improve.meta')}
                            </span>
                            <p>{t('home.services.improve.description')}</p>
                        </article>

                        <article className="service-card">
                            <span className="service-number">03</span>
                            <h3>{t('home.services.automate.title')}</h3>
                            <span className="service-meta">
                                {t('home.services.automate.meta')}
                            </span>
                            <p>{t('home.services.automate.description')}</p>
                        </article>

                        <article className="service-card">
                            <span className="service-number">04</span>
                            <h3>{t('home.services.maintain.title')}</h3>
                            <span className="service-meta">
                                {t('home.services.maintain.meta')}
                            </span>
                            <p>{t('home.services.maintain.description')}</p>
                        </article>
                    </div>

                    <Link to="/services" className="intro-link">
                        View services
                    </Link>
                </div>
            </section>

            <section className="selected-projects">
                <h2>{t('home.projects.title')}</h2>

                <div className="projects-grid">
                    <article className="project-card">
                        <img
                            src={bundleBuilderImage}
                            alt="WooCommerce Digital Bundle Builder"
                        />

                        <div className="project-content">
                            <span className="project-type">
                                {t('home.projects.items.digitalBundleBuilder.type')}
                            </span>
                            <h3>{t('home.projects.items.digitalBundleBuilder.title')}</h3>
                            <p>{t('home.projects.items.digitalBundleBuilder.description')}</p>
                            <p className="project-tech">
                                {t('home.projects.items.digitalBundleBuilder.technologies')}
                            </p>
                        </div>
                    </article>

                    <article className="project-card">
                        <img
                            src={notarhubImage}
                            alt="NotarHub"
                        />

                        <div className="project-content">
                            <span className="project-type">
                                {t('home.projects.items.notarhub.type')}
                            </span>
                            <h3>{t('home.projects.items.notarhub.title')}</h3>
                            <p>{t('home.projects.items.notarhub.description')}</p>
                            <p className="project-tech">
                                {t('home.projects.items.notarhub.technologies')}
                            </p>
                        </div>
                    </article>

                    <article className="project-card">
                        <img
                            src={ewsImage}
                            alt="Ewald W. Schneider"
                        />

                        <div className="project-content">
                            <span className="project-type">
                                {t('home.projects.items.ews.type')}
                            </span>
                            <h3>{t('home.projects.items.ews.title')}</h3>
                            <p>{t('home.projects.items.ews.description')}</p>
                            <p className="project-tech">
                                {t('home.projects.items.ews.technologies')}
                            </p>
                        </div>
                    </article>

                    <article className="project-card">
                        <img
                            src={padeffkeImage}
                            alt="Bäckerei Padeffke"
                        />

                        <div className="project-content">
                            <span className="project-type">
                                {t('home.projects.items.padeffke.type')}
                            </span>
                            <h3>{t('home.projects.items.padeffke.title')}</h3>
                            <p>{t('home.projects.items.padeffke.description')}</p>
                            <p className="project-tech">
                                {t('home.projects.items.padeffke.technologies')}
                            </p>
                        </div>
                    </article>
                </div>
                <Link to="/projects" className="projects-link">
                    {t('home.projects.viewAll')}
                </Link>
            </section>

            <section className="testimonials-section">
                <div className="testimonials-inner">
                    <div className="testimonial">
                        <span className="testimonial-label">
                            {t('home.testimonials.label')}
                        </span>

                        <blockquote>
                            “{testimonial.text}”
                        </blockquote>

                        <p className="testimonial-author">
                            <strong>{testimonial.author}</strong>
                            <span>{testimonial.company}</span>
                        </p>

                        <div className="testimonial-navigation">
                            <button
                                type="button"
                                onClick={previousTestimonial}
                                aria-label="Previous testimonial"
                            >
                                ←
                            </button>

                            <button
                                type="button"
                                onClick={nextTestimonial}
                                aria-label="Next testimonial"
                            >
                                →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-contact-section">
                <div className="about-content">
                    <h2>{t('home.about.title')}</h2>
                    <p>{t('home.about.description')}</p>

                    <Link to="/about" className="about-link">
                        {t('home.about.link')}
                    </Link>
                </div>

                <Link to="/contact" className="contact-cta">
                    <span>{t('home.contact.title')}</span>
                    <strong>↗</strong>
                    <small>{t('home.contact.button')}</small>
                </Link>
            </section>
        </main>
    )
}

export default Home