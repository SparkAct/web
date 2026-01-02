import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Allow setting base path from env (useful for GitHub Pages)
// In GitHub Actions, set BASE_PATH to "/<repo-name>/".
const base = process.env.BASE_PATH || '/'

export default defineConfig({
  plugins: [react()],
  base,
})
