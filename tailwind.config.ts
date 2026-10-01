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
        background: {
          DEFAULT: "#0F141C",
          card: "#161D2A",
          sidebar: "#121822",
          input: "#1B2434",
          hover: "#222D40",
        },
        text: {
          primary: "#F3F4F6",
          secondary: "#9CA3AF",
          muted: "#6B7280",
        },
        status: {
          confirmed: "#10B981",
          substitute: "#F59E0B",
          vacant: "#3B82F6",
          danger: "#EF4444",
        },
        border: {
          subtle: "#1E293B",
          highlight: "#334155",
        }
      },
    },
  },
  plugins: [],
};

export default config;
