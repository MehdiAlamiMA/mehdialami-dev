
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import i18n from './i18n'
import App from './App'

export async function render(url: string, language: string) {
    await i18n.changeLanguage(language)

    return renderToString(
        <StrictMode>
            <MemoryRouter initialEntries={[url]}>
                <App />
            </MemoryRouter>
        </StrictMode>
    )
}
