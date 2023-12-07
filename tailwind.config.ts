import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [require('daisyui')],
};



export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
