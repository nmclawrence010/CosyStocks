/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          light: "#FAE7DD",
          dark: "#1F1D1B",
        },
        surface: {
          light: "#FFF1E6",
          dark: "#2A2725",
        },
        primary: {
          light: "#1A1A1A",
          dark: "#E6E6E6",
        },
      },
    },
  },
  plugins: [],
};
