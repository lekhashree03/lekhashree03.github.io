// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Use GITHUB_REPOSITORY to compute base for GitHub Pages.
// If the repository is a user/organization site (repo name ends with .github.io)
// we serve from the root '/', otherwise use '/<repo>/' so project sites work.
const repoEnv = process.env.GITHUB_REPOSITORY || '' // e.g. owner/repo or ''
let base = '/'
if (repoEnv) {
  const repoName = repoEnv.split('/').pop()
  if (!repoName.endsWith('.github.io')) {
    base = `/${repoName}/`
  } else {
    base = '/'
  }
}

export default defineConfig({
  base,
  plugins: [react()]
})
