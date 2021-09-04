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
       'staff': "url('/dist/images/staff.jpg')",
       'vision': "url('/dist/images/vision.jpg')",
       'mission': "url('/dist/images/mission.jpg')",
       'bg-pattern': "linear-gradient(88deg, rgba(202, 202, 202,0.02) 0%, rgba(202, 202, 202,0.02) 58%,transparent 58%, transparent 67%,rgba(220, 220, 220,0.02) 67%, rgba(220, 220, 220,0.02) 82%,rgba(8, 8, 8,0.02) 82%, rgba(8, 8, 8,0.02) 100%),linear-gradient(318deg, rgba(19, 19, 19,0.02) 0%, rgba(19, 19, 19,0.02) 5%,transparent 5%, transparent 50%,rgba(101, 101, 101,0.02) 50%, rgba(101, 101, 101,0.02) 65%,rgba(132, 132, 132,0.02) 65%, rgba(132, 132, 132,0.02) 100%),linear-gradient(150deg, rgba(166, 166, 166,0.02) 0%, rgba(166, 166, 166,0.02) 18%,transparent 18%, transparent 37%,rgba(105, 105, 105,0.02) 37%, rgba(105, 105, 105,0.02) 87%,rgba(244, 244, 244,0.02) 87%, rgba(244, 244, 244,0.02) 100%),linear-gradient(53deg, rgba(54, 54, 54,0.02) 0%, rgba(54, 54, 54,0.02) 26%,transparent 26%, transparent 81%,rgba(251, 251, 251,0.02) 81%, rgba(251, 251, 251,0.02) 85%,rgba(19, 19, 19,0.02) 85%, rgba(19, 19, 19,0.02) 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255))",
       'core-values': "repeating-linear-gradient(45deg, rgb(255,255,255) 0px, rgb(255,255,255) 10px,transparent 10px, transparent 11px),repeating-linear-gradient(135deg, rgb(255,255,255) 0px, rgb(255,255,255) 10px,transparent 10px, transparent 11px),linear-gradient(90deg, hsl(256,7%,84%),hsl(256,7%,84%))"
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
        lime: colors.lime,
        realgray: colors.gray
      },
      fontFamily: {
        'sans-serif':['Inter']
      },
      boxShadow: {
        'btn-shadow': '0 10px 15px 10px rgba(0,0,0,0.5)',
        'about-shadow': 'rgba(0, 0, 0, 0.35) 0px -30px 20px',
        'services': 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
      },
      inset:{
        '42': '42%',
        '1/10': '10%',
        '15/100': '15%',
        '-15/100': '-15%',
        '-1/10': '-10%',
        '-6/100': '-6%',
        '45': '45rem'
      },
      maxWidth: {
        '1/2': '50%',
        '18': '18rem',
        '62': '62rem'
      },
      minWidth: {
        '1/2': '50%',
        '18': '18rem',
        '62': '62rem',
        '36': '36rem',
        '72': '72rem'
      },
      spacing: {
        '32.5': '32.5rem',
        '46': '46rem',
        'five': '5%',
        'quarter': '25%',
        'half': '50%',
        '55': '55%'
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
