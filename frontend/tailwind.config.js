/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        128: '32rem',
      },
      height: {
        128: '90vh'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}