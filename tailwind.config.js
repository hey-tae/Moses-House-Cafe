const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./views/**/*.ejs'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'lato': ['lato', 'sans-serif'],
      'inter': ['inter', 'sans-serif']
    },
    extend: {
      colors : {
        'indigo': colors.indigo,
        'brown': {
          '50': '#EFEBE9',
          '100': '#D7CCC8',
          '200': '#BCAAA4',
          '300': '#A1887F',
          '400': '#8D6E63',
          '500': '#795548',
          '600': '#6D4C41',
          '700': '#5D4037',
          '800': '#4E342E',
          '900': '#3E2723'
        }
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
