// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...baaki config
  theme: {
    container: {
      // ...
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))", // Input ka background
        ring: "hsl(var(--ring))", // Focus ring color
        background: "hsl(var(--background))", // Page ka background
        foreground: "hsl(var(--foreground))", // Text color
        primary: {
          DEFAULT: "hsl(var(--primary))", // Aapka accent color (e.g., violet)
          foreground: "hsl(var(--primary-foreground))",
        },
        // ...baaki colors
      },
      // ...
    },
  },
  plugins: [require("tailwindcss-animate")],
}