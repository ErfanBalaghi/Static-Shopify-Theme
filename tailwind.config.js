/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  safelist: [
    "mouse-circle"
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        impact: ["Impact", "sans-serif"],
      },
      colors: {
        primary: "#1b1b1b",
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
    },
  ],
};
