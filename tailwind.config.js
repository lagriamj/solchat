/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'unbounded': ['Unbounded', 'sans-serif'],
      sans: ['Poppins', 'sans-serif'],
      sora: ['Sora', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

