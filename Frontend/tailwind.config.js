/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        "sm-md": "704px",
        md: "768px",
        "md-lg": "896px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1600px",
        "4xl": "1920px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* Hide the scrollbar */
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
          "&::-webkit-scrollbar": {
            display: "none" /* WebKit */,
          },
        },
      });
    },
  ],
};
