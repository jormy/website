/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "blue-main": "#C8DEFF",
      "blue-body": "#748BAD",
      midnight: "#070E1C",
    },
    extend: {
      fontFamily: {
        header: ["Benzin", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
