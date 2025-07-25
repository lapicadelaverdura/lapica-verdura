/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        freshgreen: '#28A745',
        darkgreen: '#1E3A28',
        lightgreen: '#DCFCE7'
      }
    },
  },
  plugins: [],
};
