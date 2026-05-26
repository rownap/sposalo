import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#BE185D',
        accent: '#FCE7F3',
        background: '#FDF2F8',
        dark: '#831843',
      },
      boxShadow: {
        soft: '0 20px 45px -15px rgba(157, 23, 77, 0.35)',
      },
    },
  },
  plugins: [],
}

export default config
