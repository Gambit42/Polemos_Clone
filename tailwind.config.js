module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.6rem",
      },
      screens: {
        xss: "420px",
        xs: "500px",
        mmd: "900px",
        ml: "992px",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        lightGray: "#e5e7eb",
        polemosColor: "#951d1f",
        polemosSecondaryColor: "#221f20",
        lightBlack: "#18191a",
        illuvium: "rgb(29 16 55)",
        profileGray: "#b6b6b6",
      },
    },
  },
  plugins: [],
};
