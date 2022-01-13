module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-lightest": "#ffffff",
        "primary-medium": "#cb0026",
        "primary-darkest": "#7d0016",
        "darkest-text-color": "#43000b",
        "lightest-text-color": "#ff1b43",
        "light-card-background": "#fcf6f7",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
