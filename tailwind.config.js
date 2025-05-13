/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
          },
        },
        animation: {
            '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(0%)' },// Adjust duration and easing
          },
      },
    },
    plugins: [],
  }