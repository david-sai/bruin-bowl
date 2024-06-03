/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bruin-gold': '#C98400',
        'bruin-darkgold': '#8D5D00',
        'bruin-blue': '#1B76FF',
      },
      animation: {
        sparkle: 'sparkle 1s infinite',
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}

