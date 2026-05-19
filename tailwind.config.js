/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './App.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './constants.{ts,tsx}',
    './types.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
