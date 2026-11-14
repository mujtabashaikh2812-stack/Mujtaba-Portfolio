/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#07070a",
        card: "rgba(14, 15, 23, 0.85)",
        crimson: "#e11d48",
        scarlet: "#ef4444",
        blood: "#dc2626",
        ember: "#f97316",
        gold: "#fbbf24",
        cyan: "#38bdf8",
      },
      fontFamily: {
        cinzel: ["'Cinzel'", "serif"],
        serif: ["'Playfair Display'", "serif"],
        syne: ["Syne", "sans-serif"],
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      }
    },
  },
  plugins: [],
}
