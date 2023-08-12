/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.{html,js}"],
  theme: {
    colors: {
      'text': 'rgb(10, 13, 2)',
      'background': 'rgb(246, 252, 233)',
      'primary': 'rgb(33, 101, 16)',
      'secondary': 'rgb(193, 245, 209)',
      'accent': 'rgb(32, 203, 83)',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}