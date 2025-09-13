import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Set `base` to the repository name when deploying to GitHub Pages.
// Vite exposes the `BASE_URL` at runtime via `import.meta.env.BASE_URL` which
// will match this `base` value after build.
export default defineConfig({
    plugins: [react()],
    base: '/GitHubPagesTest/',
});
