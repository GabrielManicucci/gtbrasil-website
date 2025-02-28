import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        catarineBlue: {
          50: "#E5F7FF",
          100: "#D0F1FF",
          200: "#AAE3FF",
          300: "#77CCFF",
          400: "#42A4FF",
          500: "#187AFF",
          600: "#0061FF",
          700: "#0064FF",
          800: "#0057E0",
          900: "#0240AD",
          950: "#022873",
          DEFAULT: "#022873",
        },
        silverTree: {
          50: "#F5FAF7",
          100: "#D8F3E2",
          200: "#B5E5CA",
          300: "#84D1AB",
          400: "#65BF95",
          500: "#2E9B6C",
          600: "#1F7C56",
          700: "#196346",
          800: "#164F39",
          900: "#134130",
          950: "#0A241B",
          DEFAULT: "#65BF95",
        },
        shark: {
          50: "#F5F6F6",
          100: "#E6E7E7",
          200: "#CFD2D1",
          300: "#AEB2B0",
          400: "#858B88",
          500: "#6A706D",
          600: "#5A605D",
          700: "#4D514F",
          800: "#434745",
          900: "#3B3E3D",
          950: "#191A1A",
          DEFAULT: "#858B88",
        },
        background: "var(--bg-gradient)",
      },
    },
  },
  plugins: [],
} satisfies Config;
