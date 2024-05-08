/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./proj/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        'rowtheme': '0.5fr 1fr 1fr 0.3fr',
    },
      gridTemplateColumns: {
        'coltheme': '0.5fr 1fr 1fr 0.5fr',
    },
  },
  plugins: [],
}
}

