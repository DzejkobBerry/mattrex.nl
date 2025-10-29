module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7FC241',
          dark: '#6BA835',
          light: '#9DD160',
        },
        secondary: {
          DEFAULT: '#245D31',
          dark: '#1A4423',
          light: '#2F7A40',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}