import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Self-hosted so the identity does not depend on the visitor's OS fonts and
// no request leaves the origin. Only the weights the design actually uses.
import '@fontsource-variable/inter/wght.css'

// Order matters: Tailwind first, then tokens, then the layers that consume
// them. Imported here rather than chained through CSS @import so Vite keeps
// each file as its own module in dev.
import './index.css'
import './styles/tokens.css'
import './styles/base.css'
import './styles/typography.css'
import './styles/layout.css'
import './styles/components.css'
import App from './app/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
