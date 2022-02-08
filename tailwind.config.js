const colors = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000",
  white: "#fff",
  gray: {
    faint: "#757575",
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
  blue: {
    100: "#e3f2fd",
    200: "#bbdefb",
    300: "#90caf9",
    400: "#64b5f6",
    500: "#42a5f5",
    600: "#2196f3",
    core: "#4285f4",
  },
  red: {
    100: "#FFEBEE",
    200: "#FFCDD2",
    300: "#EF9A9A",
    400: "#E57373",
    500: "#EF5350",
    600: "#F44336",
    core: "#EA4335",
  },
  yellow: {
    100: "#FFF8E1",
    200: "#FFECB3",
    300: "#FFE082",
    400: "#FFD54F",
    500: "#FFCA28",
    600: "#FFC107",
    core: "#FBBC04",
  },
  green: {
    100: "#E8F5E9",
    200: "#C8E6C9",
    300: "#A5D6A7",
    400: "#81C784",
    500: "#66BB6A",
    600: "#4CAF50",
    core: "#34A853",
  },
  orange: {
    500: "#f97316",
  },
  cyan: {
    500: "#06b6d4",
  },
  violet: {
    500: "#8b5cf6",
  },
  pink: {
    500: "#f43f5e",
  },
  navigationColor: "#15191C",
  greenTextColor: "#64ffda",
  secondColor: "#8892b0",
  sliderColor: "#1D2127",
  redColor: "#EF294D",
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors,
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
