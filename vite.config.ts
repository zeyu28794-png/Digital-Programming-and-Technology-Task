import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages 项目页部署在子路径（username.github.io/仓库名/），
  // 传入仓库名 PAGES_REPO 即可自动拼出子路径；不传则按根路径 '/' 构建（Vercel / Netlify）。
  base: process.env.PAGES_REPO ? `/${process.env.PAGES_REPO}/` : '/',
  plugins: [react(), tailwindcss()],
})
