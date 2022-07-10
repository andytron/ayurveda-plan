const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      red: colors.red,
      green: colors.green,
      yellow: colors.yellow,
    },
    extend: {
      fontFamily: {
        rc: ["Radio Canada"],
      },
    },
  },
  plugins: [],
}
