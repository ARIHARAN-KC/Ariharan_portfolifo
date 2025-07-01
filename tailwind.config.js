/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        fira: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};