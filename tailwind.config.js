module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-lightest": "#ffffff",
        "primary-medium": "rgb(250, 128, 114)",
        "primary-darkest": "#FF8070",
        "darkest-text-color": "black",
        "lightest-text-color": "#ff1b43",
        "light-card-background": "#fcf6f7",
        "salmon-pink": "rgb(250, 128, 114)",
        // peach: "#F0C6A6",
        indigo: "#3E1F3E",
        // coral: "#FF8070", //primary
        // aqua: "#21C5C4",
        "dirt-brown": "#422e28",
      },
      backgroundImage: {
        "contact-pattern":
          "linear-gradient(to right, rgba(203, 0, 38, 0.2), rgba(203, 0, 38, 0.5)), url('https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
