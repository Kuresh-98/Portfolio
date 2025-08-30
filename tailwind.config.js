const { Miriam_Libre } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Primary accent and semantic colors for the site theme
        accent: '#0449df',
        'accent-dark': '#0337b3',
        surface: '#ffffff',
        'surface-dark': '#0f172a',
        muted: '#6b7280',
        border: '#e5e7eb',
        'border-dark': '#374151',
        darkTheme: "#0f172a",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)"],
        ovo: ["var(--font-ovo)"],
      },
    },
  },
  plugins: [],
};

