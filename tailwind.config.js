/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B365D",    // Navy Blue
        secondary: "#707070",  // Warm Gray
        accent: "#FDB813",     // Golden Yellow
      },
    },
  },
  plugins: [],
}
