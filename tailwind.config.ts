import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        catarineBlue: {
          "50": "#E5F7FF",
          "100": "#D0F1FF",
          "200": "#AAE3FF",
          "300": "#77CCFF",
          "400": "#42A4FF",
          "500": "#187AFF",
          "600": "#0061FF",
          "700": "#0064FF",
          "800": "#0057E0",
          "900": "#0240AD",
          "950": "#022873",
          DEFAULT: "#022873",
        },
        silverTree: {
          "50": "#F5FAF7",
          "100": "#D8F3E2",
          "200": "#B5E5CA",
          "300": "#84D1AB",
          "400": "#65BF95",
          "500": "#2E9B6C",
          "600": "#1F7C56",
          "700": "#196346",
          "800": "#164F39",
          "900": "#134130",
          "950": "#0A241B",
          DEFAULT: "#65BF95",
        },
        shark: {
          "50": "#F5F6F6",
          "100": "#DEE3E1",
          "200": "#D9DEDC",
          "300": "#AEB2B0",
          "400": "#858B88",
          "500": "#6A706D",
          "600": "#5A605D",
          "700": "#4D514F",
          "800": "#434745",
          "900": "#3B3E3D",
          "950": "#191A1A",
          DEFAULT: "#858B88",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
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
      rotate: {
        "270": "270deg",
      },
      backdropBlur: {
        ps: "1px",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 1.5s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    screens: {
      sm: "448px",
      md: "552px",
      dy: "755px",
      yl: "924px",
      lg: "1040px",
      xl: "1280px",
      "2xl": "1536px",
    },
    plugins: [tailwindcssAnimate],
  },
} satisfies Config;
