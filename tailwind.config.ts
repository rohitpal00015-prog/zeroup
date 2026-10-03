import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090B",
        foreground: "#F4F4F6",
        surface: {
          50: "#1A1D24",
          100: "#14161C",
          200: "#0F1116",
          300: "#0B0C10",
        },
        muted: {
          DEFAULT: "#767C8D",
          light: "#A0A6B5",
          dark: "#3B3F4B",
        },
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          subtle: "rgba(255, 255, 255, 0.04)",
          strong: "rgba(255, 255, 255, 0.16)",
        },
        accent: {
          DEFAULT: "#FF4800",
          hover: "#FF5E1E",
          dim: "rgba(255, 72, 0, 0.12)",
          glow: "rgba(255, 72, 0, 0.25)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "SFMono-Regular", "Menlo", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        tight: "-0.01em",
        wideSystem: "0.15em",
        ultraWide: "0.25em",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
