import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";



export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'retro', 'synthwave', 'cyberpunk', 'valentine', 'aqua', 'luxury', 'coffee', 'nord', 'business', 'cupcake', 'pastel'],
  },
} satisfies Config;
