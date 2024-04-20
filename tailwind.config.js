/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text_color: "#fff",
        accent: "#4cbcb4",
        background: "#141414",
      },
    },
  },
  plugins: [],
};
