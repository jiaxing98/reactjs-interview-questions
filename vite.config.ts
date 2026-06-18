import { devtools } from '@tanstack/devtools-vite'
import tanstackRouter from '@tanstack/router-plugin/vite'
import { defineConfig } from 'vite'

import tailwindcss from '@tailwindcss/vite'
import viteReact from '@vitejs/plugin-react'
import { resolve } from 'path'

const config = defineConfig({
  plugins: [devtools(), tanstackRouter({ target: 'react' }), tailwindcss(), viteReact()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})

export default config
