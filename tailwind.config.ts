import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "spin-hexagon-bold": "spin 80s linear infinite",
        "spin-hexagon-thin": "spin 60s linear infinite",
        "spin-hexagon-thin-extra":
          "spin-hexagon-thin-extra 40s linear infinite",
      },
      keyframes: {
        "spin-hexagon-thin-extra": {
          "0%": { transform: "rotate(90deg)" },
          "100%": { transform: "rotate(450deg)" },
        },
      },
      spacing: {
        "128": "32rem",
        "256": "48rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
