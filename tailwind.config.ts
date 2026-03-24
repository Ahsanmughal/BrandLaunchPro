import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "sans-serif"],
      },
      colors: {
        industrial: {
          slate: "#0f172a",
          "slate-light": "#1e293b",
          charcoal: "#334155",
          steel: "#64748b",
          "steel-light": "#94a3b8",
          amber: "#f59e0b",
          copper: "#d97706",
          orange: "#fb923c",
          blue: "#0ea5e9",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "industrial-gradient":
          "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        "amber-gradient":
          "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      },
      animation: {
        "slide-in-left": "slideInLeft 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
        "pulse-amber": "pulseAmber 2s ease-in-out infinite",
      },
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        pulseAmber: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(245,158,11,0.4)" },
          "50%": { boxShadow: "0 0 0 8px rgba(245,158,11,0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
