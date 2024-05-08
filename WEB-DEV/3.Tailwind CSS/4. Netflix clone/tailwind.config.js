/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Netflix/*.{html,js}"],
  theme: {
    extend: {
      height:{
        "row-height" : "100vh",
      }
    },
  },
  plugins: [],
}

