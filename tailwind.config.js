/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textShadow: {
        outline: '0 0 5px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.5)', // Faint outline shadower
      },
      colors: {
        sunset: {
          lightOrange: '#ffd5a4',
          amber: '#e68a00',
          deepAmber: '#d56d0c',
          softCoral: '#FF8C66',
          lightPeach: '#FFDFB2',
          whitePeach: '#fae9d2',
          desertSand: '#f0dfc8',
          coolGray: '#5F6368',
        },
        blue: {
          softBlue: '#4A90E2',
          lightSkyBlue: '#A9D6FF',
        },
      },
      fontFamily: {
        heading: ['var(--font-michroma)', 'sans-serif'],
        body: ['var(--font-sofia)', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
