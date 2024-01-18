/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      screens: {
        xxs:"350px",
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lgp: "1200px",
        xxlg: "1105px",
        lg: "1280px",
        xl: "1700px",
        xxl: "1920px",
      },
    },
  },
  plugins: [],
}