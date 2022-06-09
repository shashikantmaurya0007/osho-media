module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightPrimary: "#9DE1FB",
        lightSecondary: "#8AAAD0",
        lightBackground: "#CEDEF3",
        lightHover: "#8CB2E3",
        darkPrimary: "#155EA2",
        darkSecondary: "#3864BC",
        darkBackground: `#022550`,
        darkHover: "#8CB2E3",
        buttonBgColor: "#67AAF9",
      },
      fontWeight: {
        hairline: 100,
        "extra-light": 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        "extra-bold": 800,
        black: 900,
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
