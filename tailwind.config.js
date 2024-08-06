/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FAF9F6',
        black: '#282828',
        blue: '#1C30E1',
      },
      fontFamily: {
        title: ['Akzidenz'],
        bread: ['Montserrat', 'serif'],
      },
    },
  },
  plugins: [],
}

