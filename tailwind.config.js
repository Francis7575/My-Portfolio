/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '420': '420px'
      },
      colors: {
        'lightgray': 'rgba(116, 123, 149, 0.1)',
        'grayish-gray': '#5C6F88',
        'gray': 'rgb(75 85 99)',
        'body': 'hsl(159, 49%, 93%)',
        'error': '#df3c61',
        'success': 'hsl(153,71%,59%)'
      }
    },
  },
  plugins: [],
}