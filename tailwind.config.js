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
       'more': "url('/dist/images/find_more_button.svg')",
       'about': "url('/dist/images/about.jpg')",
       'integrity': "url('/dist/images/integrity.jpg')",
       'clients': "url('/dist/images/clients.jpg')",
       'staff': "url('/dist/images/staff.jpg')"
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
        emerald: colors.emerald,
        lime: colors.lime
      },
      fontFamily: {
        'sans-serif':['Inter']
      },
      boxShadow: {
        'btn-shadow': '0 10px 15px 10px rgba(0,0,0,0.5)',
        'about-shadow': 'rgba(0, 0, 0, 0.35) 0px -30px 20px',
      },
      inset:{
        '42': '42%',
        '1/10': '10%',
        '15/100': '15%'
      },
      maxWidth: {
        '1/2': '50%',
      },
      spacing: {
        '32.5': '32.5rem'
      },
      height: {
        '352': '352px'
      }
    }
  },
  variants: {
    extend: {
      margin: ['last'],
      border: ['hover'],
      filter: ['hover'],
      grayscale: ['hover'],
      blur: ['hover']
    },
  },
  plugins: [],
}
