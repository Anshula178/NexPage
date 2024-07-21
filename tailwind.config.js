/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#f1f5f9',
        customBlue:'#669bbc'
      },
    },
  },
  plugins: [],
}

