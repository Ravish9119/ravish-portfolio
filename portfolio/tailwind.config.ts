import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#06080f",
          subtle: "#0a0e1a",
          card: "#0d1322",
          cardHover: "#121a2e",
          surface: "#172038",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          light: "rgba(255, 255, 255, 0.12)",
          accent: "rgba(0, 212, 255, 0.25)",
        },
        accent: {
          cyan: "#00d4ff",
          blue: "#00d4ff",
          purple: "#a855f7",
          teal: "#2cffe0",
          emerald: "#10b981",
        },
        foreground: {
          DEFAULT: "#e7eaf2",
          muted: "#9aa3b8",
          dim: "#64748b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1240px",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.3)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)",
        cardHover: "0 12px 30px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(56, 189, 248, 0.25)",
        glow: "0 0 40px -10px rgba(56, 189, 248, 0.15)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "pulse-subtle": "pulseSubtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.4" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
