/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#F5F5F5',
          dark: '#0F0F0F',
          darkSecondary: '#1A1A1A'
        },
        accent: {
          DEFAULT: '#0CC8A8',
          hover: '#0AA58C'
        },
        severity: {
          critical: '#FF4D4D',
          high: '#FF9933',
          medium: '#FFCC00',
          low: '#22C55E'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
