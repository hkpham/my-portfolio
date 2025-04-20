/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['"Playfair Display"', 'serif'],
    },
    keyframes: {
      fadeInWord: {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
    animation: {
      fadeInWord: 'fadeInWord 0.6s ease forwards',
    },
  },
},
  plugins: [],
}


