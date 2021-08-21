module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
  purge: ['./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
