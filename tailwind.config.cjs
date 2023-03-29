/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        screen: "100dvh",
        "screen-small": "100svh",
        "screen-large": "100lvh",
      },
      colors: {
        primary: "#000",
        secondary: "rgb(220 38 38 / 1)",
      },
      backgroundImage: {
        "banner-img":
          "https://webstockreview.net/images/graffiti-clipart-paint-splatter-16.png",
      },
    },
  },
  plugins: [],
};
