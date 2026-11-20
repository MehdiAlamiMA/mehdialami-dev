
import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './i18n'
import './index.css'
import App from './App.tsx'

const container = document.getElementById('root')!

const app = (
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
)

if (container.hasChildNodes()) {
    hydrateRoot(container, app, {
        onRecoverableError: (error) => {
            console.error('React hydration error:', error)
        },
    })
} else {
    createRoot(container).render(app)
}
