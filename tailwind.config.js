/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-gradient": "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        "brand-gradient": "linear-gradient(135deg, #00C2CB, #007CF0)",
      },
    },
    colors: {
      primary: "#00C2CB",
      secondary: "#007CF0",
    },
    keyframes: {
      float: {
        "0%, 100%": { transform: "translateY(0px)" },
        "50%": { transform: "translateY(-20px)" },
      },
    },
    animation: {
      float: "float 6s ease-in-out infinite",
    },
    fontFamily: {
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
