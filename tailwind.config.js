/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "primary-blue": "#2a75bb",
      "primary-yellow": "#ffcb05",
      "secundary-yellow": "#D5A100",
      "light-grey": "#f4f4f5",
      white: "#ffffff",
      "dark-grey": "#18181b",
    },
    extend: {
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
        "v-t": ['"VT323"', "monospace"],
      },
    },
  },
  plugins: [],
};
