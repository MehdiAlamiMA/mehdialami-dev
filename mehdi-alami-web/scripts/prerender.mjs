
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const dist = join(root, 'dist')
const template = await readFile(join(dist, 'index.html'), 'utf8')

const { render } = await import(
    pathToFileURL(join(root, 'dist-ssr', 'entry-server.js')).href
)

const routes = {
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
}

const metadataPattern =
    /<title>[\s\S]*?<\/title>|<meta\s+(?:name="description"|property="og:(?:title|description|url)")\s+[^>]*\/?>|<link\s+rel="(?:canonical|alternate)"\s+[^>]*\/?>|<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/g

for (const [language, pages] of Object.entries(routes)) {
    for (const path of Object.values(pages)) {
        const content = await render(path, language)

        const metadata = content.match(metadataPattern) ?? []

        const html = template
            .replace('<html lang="en">', `<html lang="${language}">`)
            .replace(
                '<div id="root"></div>',
                `<div id="root">${content}</div>`
            )

        const relativePath =
            path === '/en/' || path === '/de/' || path === '/br/'
                ? `${path.slice(1)}index.html`
                : `${path.slice(1)}.html`

        const output = join(dist, relativePath)

        await mkdir(dirname(output), { recursive: true })
        await writeFile(output, html, 'utf8')

        console.log(`Generated: ${path}`)
    }
}

console.log('15 HTML pages generated successfully.')
