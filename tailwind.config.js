/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "custom-color-name": "#123456",
      "cdark-2": "#000",
      "cdark-1": "#6F38C5",
      "cwhite-3": "#87A2FB",
      "cwhite-2": "#ADDDD0",
      "cwhite-1": "#EEEEEE",
    },
  },
  plugins: [],
};
