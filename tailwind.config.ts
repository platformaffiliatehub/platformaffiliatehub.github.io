import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#101a35",
          blue: "#2f6bff",
          "blue-light": "#4f8ff7",
          gray: "#5b6472",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #4f8ff7 0%, #1c3d7a 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
