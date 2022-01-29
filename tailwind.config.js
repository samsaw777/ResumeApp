module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        experienceListHeight: "75vh",
        projectListHeight: "60vh",
        projectInputHeight: "65vh",
        landingHeight: "91.2vh",
        resumeHeight: "91vh",
      },
      colors: {
        landingHeading: "#2CBFAA",
        // landingBackground: "#f8f9fa",
        landingBackground: "#EEF5F9",
        buttonColor: "#28BEBD",
        navbarBackground: "#1C2732",
        instagram: "#8a3ab9",
        linkedin: "#0077B5",
        github: "#6e5494",
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
