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
        church: {
          bg: "#131B2A",       // Основной фон сайта
          card: "#1E2738",     // Фон карточек
          hover: "#283449",    // Цвет при наведении
          border: "#2A364E",   // Границы
          primary: "#2F5B85",  // Синие кнопки
          success: "#059669",  // Зеленые статусы (Підтверджено)
          warning: "#D97706",  // Желтые статусы (Потрібна заміна)
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
