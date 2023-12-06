import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

module.exports = {
  //...
  plugins: [require("daisyui")],
}

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
