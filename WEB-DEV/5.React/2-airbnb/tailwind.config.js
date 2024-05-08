/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
       // Complex site-specific row configuration
        'row-layout': '0.2fr 2fr 1fr',
      }
    },
  },
  plugins: [],
}
