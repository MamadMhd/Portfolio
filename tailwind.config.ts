import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "form-background": "url('/bgForm.jpg')"
      },
      fontFamily: {
        "vazirmatn": ['"Vazirmatn RD"']
      },
      maxWidth: {
        '8xl': "100rem",
      },
      boxShadow: {
        customShadow1: "0 0 15px -1px rgb(0 0 0 / 0.2)",
        customShadow2: "0 15px 15px -1px rgb(0 0 0 / 0.4)",
      },
      container: {
        center: true,
        padding: "2rem",
      },
      screens: {
        450: "450px"
      }
    },
  },
  plugins: [],
};
export default config;
