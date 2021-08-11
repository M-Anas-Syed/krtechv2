const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '3rem',
    },
    extend: {
      backgroundImage: theme => ({
       'hero-img': "url('/dist/images/dubai.jpg')",
       'construction-bg': "url('/dist/images/construction.jpg')",
       'electrician-bg': "url('/dist/images/electrician.jpg')",
       'painter-bg': "url('/dist/images/painter.jpg')",
       'plumber-bg': "url('/dist/images/plumber.jpg')",
       'logo': "url('/dist/images/krtechlogo.jpg')",
      }),
      colors: {
        // Build your palette here
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.trueGray,
        red: colors.red,
        blue: colors.sky,
        yellow: colors.amber,
        teal: colors.teal,
        emerald: colors.emerald
      }
    }
  },
  variants: {
    extend: {
      margin: ['last'],
      border: ['hover']
    },
  },
  plugins: [],
}
