/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow : {
        'b' : '0px 1px 2px rgba(16, 24, 40, 0.05)',
        't' : ' 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
      },
      fontSize : {
        l: ['28px','20px']
      }
    },
  },
  plugins: [],
}
