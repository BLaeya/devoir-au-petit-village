/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Comfortaa", "sans-serif"],
        title: ["Bubbleboddy Neue", "serif"],
      },
      colors: {
        text: "#151217",
        title: "#da001e",
        primary: "#fdd90b",
        background: "#f9d0a3",
      },
    },
  },
  plugins: [],
};
