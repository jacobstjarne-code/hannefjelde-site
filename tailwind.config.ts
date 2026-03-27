import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Libre Baskerville'", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        cream: "#F9F7F4",
        "cream-dark": "#F0EDE8",
        slate: "#2C3E50",
        "slate-deep": "#1a2535",
        accent: "#8B6914",
        "text-muted": "#6B7280",
        border: "#DDD9D3",
      },
    },
  },
  plugins: [],
};
export default config;
