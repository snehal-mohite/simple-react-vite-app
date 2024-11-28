/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './test/src/**/*.{html,js,ts,jsx,tsx}',
    "./test/index.html",
    "./test/src/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsxjs,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
