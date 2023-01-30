/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        lochinvar: {
          50: "#effaf6",
          100: "#d8f3e6",
          200: "#b5e5d1",
          300: "#84d1b7",
          400: "#51b696",
          500: "#2c9376",
          600: "#1f7c64",
          700: "#196352",
          800: "#164f42",
          900: "#134137",
        },
      },
    },
  },
  plugins: [],
};
