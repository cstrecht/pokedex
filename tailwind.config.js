/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "primary-blue": "#2a75bb",
      "primary-yellow": "#ffcb05",
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
