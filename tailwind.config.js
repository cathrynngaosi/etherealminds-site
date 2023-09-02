/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
      colors: {
        seashellPink: "#F4E7E1",
        seashellNude: "#F6EDE9",
        darkBrown: "#623C29",
        mediumBrown: "#966147",
        lightBrown: "#C7AC9E",
      },
      backgroundImage: {
        "gift-image": "url('../src/data/images/cover-1.JPG')",
      },
    },
  },
  plugins: [],
};
