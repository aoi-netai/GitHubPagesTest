import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import AppRoutes from './Route'

// `import.meta.env.BASE_URL` is populated by Vite and will match the `base`
// set in `vite.config.ts` (e.g. '/ReactTest/'). Passing it to BrowserRouter
// ensures client-side routing works when the site is served from a subpath.
const basename = import.meta.env.BASE_URL

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
