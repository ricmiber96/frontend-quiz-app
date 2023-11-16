/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        laptop: {
          max: '80em'
        },
        desktop: {
          max: '64em'
        },
        tablet: {
          max: '43.75em'
        },
        mobile: {
          max: '37.5em'
        }
      }
    }
  },
  plugins: []
}
