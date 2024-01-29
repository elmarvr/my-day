import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx,vue}'],
  theme: {
    extend: {
      container: {
        center: true
      }
    }
  },
  plugins: []
} satisfies Config
