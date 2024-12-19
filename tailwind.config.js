/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '420': '420px',
        '500': '500px',
        '900': '900px'
      },
      fontFamily: {
        'raleway': ["Raleway", "sans-serif"],
        'roboto-condensed': ["Roboto Condensed", "sans-serif"]
      },
      colors: {
        'lightgray': 'rgba(116, 123, 149, 0.1)',
        'grayish-gray': '#5C6F88',
        'gray': 'rgb(75, 85, 99)',
        'secondgray': 'rgba(75, 85, 99, 0.3)',
        'thirdgray': 'rgba(75, 85, 99, 0.15)',
        'body': 'hsl(159, 49%, 93%)',
        'error': '#df3c61',
        'success': 'hsl(153,71%,59%)',
        'success-two': 'hsla(153,71%,59%, 0.70)',
        'fuchsia': '#d5333e',
        'blue': 'rgba(0, 23, 255, 0.7)',
        'loading': '#7db8c7',
        'dark-gray': '#2D2D2D',
        'second-blue': 'rgba(78, 145, 252, 0.7)'
      }
    },
  },
  plugins: [],
}