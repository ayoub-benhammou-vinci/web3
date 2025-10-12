/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1.5rem",  // Grands coins arrondis sur tous les éléments .rounded
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      colors: {
        background: "hsl(var(--background))",        // #126D71
        foreground: "hsl(var(--foreground))",        // #ECEDF2
        // Utilise ces deux pour bg/background et text/foreground dans tout le projet
        card: {
          DEFAULT: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))"
        },
        primary: {
          DEFAULT: "hsl(var(--background))",        // Pour rester cohérent
          foreground: "hsl(var(--foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--foreground))",
          foreground: "hsl(var(--background))"
        },
        border: "hsl(var(--background))",
        input: "hsl(var(--background))",
        ring: "hsl(var(--background))",
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
