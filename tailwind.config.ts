import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["Benzin", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        denim: {
          50: "#f2f6fd",
          100: "#e4ebfa",
          200: "#c2d5f5",
          300: "#809bc3",
          400: "#508ee0",
          500: "#2a70cd",
          600: "#1b55ae",
          700: "#17448d",
          800: "#173b75",
          900: "#183362",
          950: "#070e1c",
        },
      },
    },
  },
  plugins: [],
};
export default config;
