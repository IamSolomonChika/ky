/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
  ],
  theme: {
    extend: {
      require: ['@tailwindcss/forms'],
    },
  },
  plugins: [
  ],
}