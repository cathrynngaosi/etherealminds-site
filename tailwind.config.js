/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        price: ["Quicksand", "sans-serif"],
        anton: ["Anton", "sans-serif"],
        tenali: ["Tenali Ramakrishna", "sans-serif"],
        cookie: ["Cookie", "cursive"],
        pacifico: ["Pacifico", "cursive"],
      },
      colors: {
        seashellPink: "#F4E7E1",
        seashellNude: "#F6EDE9",
        darkBrown: "#623C29",
        mediumBrown: "#966147",
        lightBrown: "#C7AC9E",
        blue: "#91BFCF",
        navyBlue: "#0C3963",
        darkBlue: "#000086",
        blush: "#D9C1C7",
        oldRose: "#B4917E",
        wine: "#4C2634",
        rosegold: "#D9B9B2",
        red: "#B91C1B",
        pink: "#F6BAC5",
        darkPink: "#D20263",
        gold: "#C3963A",
        tiffanyBlue: "#09B5AF",
        silver: "#BABABA",
        yellow: "#F7F29B",
        mintGreen: "#A5E9CA",
      },
      backgroundImage: {
        "gift-image": "url('../src/data/images/cover-1.JPG')",
      },
    },
  },
  plugins: [],
};
