/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#08a05c"
      },
      backgroundImage: {
        'browse-pattern': "url('../src/assets/browse.svg')",
        'protection-image': "url('../src/assets/protection.webp')",
        'planet-pattern': "url('../src/assets/savingplant.svg')",
        'reeddi-cash': "url('../src/assets/affordable.webp')"
        
      }
    },
  },
  plugins: [],
}