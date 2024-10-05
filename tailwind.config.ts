import type { Config } from "tailwindcss";
import {
  colors,
  white,
  black,
  transparent,
  currentColor,
} from "@/tokens/colors";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        ...colors,
        white,
        black,
        transparent,
        currentColor,
      },
      fontFamily: {
        sans: ["Inter Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
