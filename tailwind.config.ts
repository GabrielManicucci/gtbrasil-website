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
          100: "#DEE3E1",
          200: "#D9DEDC",
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
      backgroundImage: {
        "custom-gradient": "var( --bg-gradient)",
      },
      dropShadow: {
        goalcard: [
          "0px 72px 92px rgba(0, 0, 0, 0.10)",
          "0px 21.706px 27.735px rgba(0, 0, 0, 0.07)",
          "0px 9.016px 11.52px rgba(0, 0, 0, 0.07)",
          " 0px 3.261px 4.166px rgba(0, 0, 0, 0.10)",
        ],
      },
      // screens: {
      //   sm: "448",
      //   md: "552",
      //   dy: "755",
      //   yl: "924",
      //   lg: "1040px",
      // },
    },
    screens: {
      sm: "448px",
      // => @media (min-width: 640px) { ... }

      md: "552px",
      // => @media (min-width: 768px) { ... }

      dy: "755px",

      yl: "924px",

      lg: "1040px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
} satisfies Config;
