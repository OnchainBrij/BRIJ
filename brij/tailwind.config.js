/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        "max-sm": { max: "640px" },
        "max-md": { max: "902px" },
        "max-lg": { max: "1024px" },
        "max-xl": { max: "1280px" },
      },
    },
  },
  plugins: [],
};
