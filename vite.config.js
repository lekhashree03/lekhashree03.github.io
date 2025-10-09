// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Use an environment variable GITHUB_REPOSITORY to compute base for GitHub Pages.
// When running locally this will default to '/'.
const repo = process.env.GITHUB_REPOSITORY || ''
const base = repo ? `/${repo.split('/').pop()}/` : '/'

export default defineConfig({
  base,
  plugins: [react()]
})
