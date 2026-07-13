import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#607f55",
          light: "#7a9f6d",
          dark: "#4a6442",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
