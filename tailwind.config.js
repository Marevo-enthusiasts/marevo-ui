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
        "dark-liver": "#505050"
      },
      objectPosition: {
        custom: '40% 0',
      }
    },
    fontFamily: {
      roboto: ['Roboto Condensed', 'Roboto Condensed Light', 'Roboto Condensed Bold'],
    },
  },
  plugins: [],
};

