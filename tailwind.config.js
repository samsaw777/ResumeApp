module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        experienceListHeight: "75vh",
        projectListHeight: "68vh",
        landingHeight: "91.2vh",
      },
      colors: {
        landingHeading: "#2CBFAA",
      },
      inset: {
        experienceTop: "490px",
        experienceLeft: "10px",
        skillRight: "75px",
        skillTop: "194px",
        projectTop: "452px",
        projectRight: "120px",
        educationTop: "205px",
        educationLeft: "85px",
      },
    },
  },
  plugins: [],
};
