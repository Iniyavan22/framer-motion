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
      boxShadow: {
        'white': '0 4px 10px rgba(255, 105, 180, 0.25)',
        'white-md': '4px 0 100px 10px rgba(255, 105, 180, 0.5)',
        'white-lg': '0 10px 15px rgba(255, 255, 255, 0.7)',
        
        // Add more custom shadows if needed
      },
      colors: {
        'hotPink': 'rgba(255, 105, 180, 0.5)',
      },
    },
    screens: {
      'sm': {max:'640px'},
      // => @media (min-width: 640px) { ... }

      'md': {max:'768px'},
      // => @media (min-width: 768px) { ... }

      'lg': {max:'1024px'},
      // => @media (min-width: 1024px) { ... }

      'xl': {max:'1280px'},
      // => @media (min-width: 1280px) { ... }

      '2xl': {max:'1536px'},
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
export default config;
