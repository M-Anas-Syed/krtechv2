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
       'bg-pattern': "linear-gradient(88deg, rgba(202, 202, 202,0.02) 0%, rgba(202, 202, 202,0.02) 58%,transparent 58%, transparent 67%,rgba(220, 220, 220,0.02) 67%, rgba(220, 220, 220,0.02) 82%,rgba(8, 8, 8,0.02) 82%, rgba(8, 8, 8,0.02) 100%),linear-gradient(318deg, rgba(19, 19, 19,0.02) 0%, rgba(19, 19, 19,0.02) 5%,transparent 5%, transparent 50%,rgba(101, 101, 101,0.02) 50%, rgba(101, 101, 101,0.02) 65%,rgba(132, 132, 132,0.02) 65%, rgba(132, 132, 132,0.02) 100%),linear-gradient(150deg, rgba(166, 166, 166,0.02) 0%, rgba(166, 166, 166,0.02) 18%,transparent 18%, transparent 37%,rgba(105, 105, 105,0.02) 37%, rgba(105, 105, 105,0.02) 87%,rgba(244, 244, 244,0.02) 87%, rgba(244, 244, 244,0.02) 100%),linear-gradient(53deg, rgba(54, 54, 54,0.02) 0%, rgba(54, 54, 54,0.02) 26%,transparent 26%, transparent 81%,rgba(251, 251, 251,0.02) 81%, rgba(251, 251, 251,0.02) 85%,rgba(19, 19, 19,0.02) 85%, rgba(19, 19, 19,0.02) 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255))",
       'core-values': "linear-gradient(90deg, rgba(125, 125, 125, 0) 0%, rgba(125, 125, 125, 0) 7%,rgba(194, 194, 194, 0) 7%, rgba(194, 194, 194, 0) 29%,rgba(124, 124, 124, 0) 29%, rgba(124, 124, 124, 0) 57%,rgba(237, 237, 237, 0) 57%, rgba(237, 237, 237, 0) 59%,rgba(110, 110, 110, 0) 59%, rgba(110, 110, 110, 0) 100%),linear-gradient(90deg, rgba(6, 6, 6, 0.01) 0%, rgba(6, 6, 6, 0.01) 20%,rgba(210, 210, 210, 0.01) 20%, rgba(210, 210, 210, 0.01) 64%,rgba(10, 10, 10, 0.01) 64%, rgba(10, 10, 10, 0.01) 82%,rgba(72, 72, 72, 0.01) 82%, rgba(72, 72, 72, 0.01) 88%,rgba(127, 127, 127, 0.01) 88%, rgba(127, 127, 127, 0.01) 100%),linear-gradient(90deg, rgba(4, 4, 4, 0.06) 0%, rgba(4, 4, 4, 0.06) 56%,rgba(6, 6, 6, 0.06) 56%, rgba(6, 6, 6, 0.06) 65%,rgba(110, 110, 110, 0.06) 65%, rgba(110, 110, 110, 0.06) 83%,rgba(136, 136, 136, 0.06) 83%, rgba(136, 136, 136, 0.06) 100%),linear-gradient(349deg, rgba(137, 137, 137, 0.02) 0%, rgba(137, 137, 137, 0.02) 43%,rgba(112, 112, 112, 0.02) 43%, rgba(112, 112, 112, 0.02) 100%),linear-gradient(47deg, rgba(184, 184, 184, 0.06) 0%, rgba(184, 184, 184, 0.06) 36%,rgba(32, 32, 32, 0.06) 36%, rgba(32, 32, 32, 0.06) 100%),linear-gradient(83deg, rgba(222, 222, 222, 0.07) 0%, rgba(222, 222, 222, 0.07) 98%,rgba(143, 143, 143, 0.07) 98%, rgba(143, 143, 143, 0.07) 100%),repeating-linear-gradient(0deg, rgba(244, 244, 244, 0.08) 0px, rgba(244, 244, 244, 0.08) 72px,rgba(155, 155, 155, 0.08) 72px, rgba(155, 155, 155, 0.08) 179px,rgba(102, 102, 102, 0.08) 179px, rgba(102, 102, 102, 0.08) 477px,rgba(133, 133, 133, 0.08) 477px, rgba(133, 133, 133, 0.08) 580px,rgba(83, 83, 83, 0.08) 580px, rgba(83, 83, 83, 0.08) 614px),repeating-linear-gradient(135deg, rgba(115, 115, 115, 0.03) 0px, rgba(115, 115, 115, 0.03) 266px,rgba(99, 99, 99, 0.03) 266px, rgba(99, 99, 99, 0.03) 273px,rgba(115, 115, 115, 0.03) 273px, rgba(115, 115, 115, 0.03) 351px,rgba(229, 229, 229, 0.03) 351px, rgba(229, 229, 229, 0.03) 439px),repeating-linear-gradient(45deg, rgba(72, 72, 72, 0.01) 0px, rgba(72, 72, 72, 0.01) 232px,rgba(65, 65, 65, 0.01) 232px, rgba(65, 65, 65, 0.01) 345px,rgba(140, 140, 140, 0.01) 345px, rgba(140, 140, 140, 0.01) 348px,rgba(26, 26, 26, 0.01) 348px, rgba(26, 26, 26, 0.01) 547px),repeating-linear-gradient(45deg, rgba(68, 68, 68, 0.05) 0px, rgba(68, 68, 68, 0.05) 115px,rgba(182, 182, 182, 0.05) 115px, rgba(182, 182, 182, 0.05) 246px,rgba(14, 14, 14, 0.05) 246px, rgba(14, 14, 14, 0.05) 272px,rgba(80, 80, 80, 0.05) 272px, rgba(80, 80, 80, 0.05) 298px,rgba(37, 37, 37, 0.05) 298px, rgba(37, 37, 37, 0.05) 434px),repeating-linear-gradient(135deg, rgba(46, 46, 46, 0.03) 0px, rgba(46, 46, 46, 0.03) 107px,rgba(169, 169, 169, 0.03) 107px, rgba(169, 169, 169, 0.03) 182px,rgba(71, 71, 71, 0.03) 182px, rgba(71, 71, 71, 0.03) 321px,rgba(182, 182, 182, 0.03) 321px, rgba(182, 182, 182, 0.03) 359px),linear-gradient(90deg, #084da4 0%,#01aeb6 100%)"
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
        '15/100': '15%',
        '-15/100': '-15%',
        '-1/10': '-10%',
        '-6/100': '-6%'
      },
      maxWidth: {
        '1/2': '50%',
        '18': '18rem'
      },
      spacing: {
        '32.5': '32.5rem',
        '46': '46rem',
        'five': '5%',
        'quarter': '25%',
        'half': '50%'
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
