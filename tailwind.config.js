/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6",
          light: "#60A5FA",
          dark: "#1E40AF",
        },
        secondary: {
          DEFAULT: "#14B8A6",
          light: "#2DD4BF",
          dark: "#0F766E",
        },
        surface: "#020617",
        card: "#020617",
        textPrimary: "#F8FAFC",
        textSecondary: "#CBD5E1",
      },
    },
  },
  plugins: [],
};
