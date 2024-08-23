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
      cursor: {
        'custom': 'url(./public/images/head.png) 16 16, auto', // Adjust path based on your project structure
      },
      fontFamily: {
        title: ['Akzidenz'],
        bread: ['Montserrat', 'serif'],
        breadBold: ['Montserrat', 'serif', 'bold'],
      },
    },
  },
  plugins: [],
}

