import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'black-2': "#1E2126",
        'black-3': '#222429',
        'black-100': '#222429',
        'black-90': '#252932',
        'black-80': '#2A2E39',
        'black-60': '#3D4353',
      },
      colors: {
        'green-primary': "#93BC1E",
        'green-secondary': "#ADDF45",
        'gray-secondary-70': "#C1C5CF",
        'gray-secondary-60': "#E7E7E7"
      }
    },
  },
  plugins: [],
}
export default config
