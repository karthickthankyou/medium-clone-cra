/* eslint-disable global-require */
const lineClamp = require('@tailwindcss/line-clamp')
const aspectRatio = require('@tailwindcss/aspect-ratio')
const tailwindScrollbarHide = require('tailwind-scrollbar-hide')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    lineHeight: {
      'no-gap': '.8',
      'extra-tight': '.9',
      none: ' 1',
      tight: ' 1.25',
      snug: ' 1.375',
      normal: ' 1.5',
      relaxed: ' 1.625',
      loose: ' 2',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [tailwindScrollbarHide, lineClamp, aspectRatio],
}
