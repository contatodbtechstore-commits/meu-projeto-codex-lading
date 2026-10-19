import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        blush: "#FCE4EC",
        rose: "#F8BBD0",
        pink: "#FF1493",
        lilac: "#8E44AD",
        plum: "#6A1B9A",
        ink: "#29212F"
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Arial", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"]
      },
      boxShadow: {
        float: "0 28px 85px rgba(106,27,154,.14)",
        card: "0 12px 36px rgba(106,27,154,.075)"
      },
      borderRadius: { "4xl": "2rem" }
    }
  },
  plugins: []
};
export default config;
