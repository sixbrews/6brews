/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#d4dae0",
        background_gradient_1: "#ef8677",
        background_gradient_2: "#8b8ec2",
      },
    },
  },
  plugins: [],
};
