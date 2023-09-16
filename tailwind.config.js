/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "temp123": "#A8A693",
        "gray-line": "#B8B6A5"
      },
      objectPosition: {
        custom: '50% 20%',
      }
    },
    fontFamily: {
      roboto: ['Roboto Condensed'],
    },
  },
  plugins: [],
};

