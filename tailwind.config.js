/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "screen350": "350px",
        "screen400": "400px",
        "screen900": "900px",
        "screen780": "781px",
        "screen705": "705px"
      }
    },
  },
  plugins: [require("daisyui")],
}

