/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "desaturated-red": "hsl(0, 36%, 70%)",
        "soft-red": "hsl(0, 93%, 68%)",
        "dark-grey-red": "hsl(0, 6%, 24%)",
        "white-grad": "hsl(0, 0%, 100%)",
        "white-grad": "hsl(0, 100%, 98%)",
        "pink-grad": "hsl(0, 80%, 86%)",
        "pink-grad": "hsl(0, 74%, 74%)",
      },
      fontFamily: {
        josefin: ["josefin"],
      },
    },
  },
  plugins: [require("daisyui")],
};
