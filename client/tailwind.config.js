/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'cblue-main': "#151F32",
      'cblue1': '#338AF1',
      'cblue1-hover': "#1da7c0",
    },
    maxWidth: {
      'cmax': '1440px',
    }
  },
  plugins: [],
}
