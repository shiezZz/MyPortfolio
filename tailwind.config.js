/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        sage: "rgb(var(--sage) / <alpha-value>)",
      },
      fontFamily: {
        display: ['"Newsreader Variable"', "Georgia", "serif"],
        sans: ['"Source Sans 3 Variable"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
