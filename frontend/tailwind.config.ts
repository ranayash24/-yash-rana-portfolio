/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#070b18",
          800: "#0b1020",
          700: "#111a33",
          600: "#1a2340",
        },
        teal: {
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
        },
        gold: {
          300: "#fcd34d",
          400: "#fbbf24",
        },
      },
      fontFamily: {
        sans: ["Sora", "system-ui", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(34, 211, 238, 0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
