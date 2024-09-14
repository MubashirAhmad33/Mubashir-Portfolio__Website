/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      screens: {
        xs: "480px", // Extra small devices (phones)
        sm: "640px", // Small devices (tablets)
        md: "768px", // Medium devices (small laptops)
        lg: "1024px", // Large devices (desktops)
        xl: "1280px", // Extra large devices (large desktops)
        "2xl": "1536px", // 2X large devices
      },
    },
  },
  plugins: [],
};
