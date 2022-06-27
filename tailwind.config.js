/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        redBackground: "#EC4C8A",
        blueBackground: "#4369B2"
      },
      fontFamily:{
        control: ['Lato','sans-serif'],
        primary: ['Average+Sans','sans-serif']
      }
    },
  },
  plugins: [],
}
