import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: "Josefin Sans",
        rubik: "Rubik",
      },
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        eorange: "#FC7601",
        egreen:"#96E903"
      },
    },
  },
  plugins: [],
} satisfies Config;
