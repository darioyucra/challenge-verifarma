/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#6200af',
        white: '#f8f8f8',
        graystrong: '#141a26',
        graymedium: '#28303d',
        graylight: '#9ba0a6'
      }
    },
  },
  plugins: [],
}

