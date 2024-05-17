/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          basered: "#e60012",
          basewhite: "#fff",
          baseblack: "#000",
          basegray: "#eaeaea",
          baselightred: "#cb1c2be0",
          baselightblack: "#222222c7"
      }
    },
  },
  plugins: [],
}

