import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages uchun base URL
export default defineConfig({
  base: "/my-portfolio/",
  plugins: [vue()],
})
