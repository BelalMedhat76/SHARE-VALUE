/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'ken-burns': 'ken-burns 20s ease-out infinite alternate',
      },
    },
  },
  plugins: [],
};