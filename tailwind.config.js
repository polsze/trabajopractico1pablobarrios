/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        'fondo-naranja': "url('assets/images/bg-naranja.avif')",
       
      },
    },
    screens:{
      "3xl": { max: "1535px" },
    // => @media (max-width: 1535px) { ... }

    "2xl": { max: "1300px" },
    // => @media (max-width: 1300px) { ... }

    xl: { max: "1279px" },
    // => @media (max-width: 1279px) { ... }

    lg: { max: "1023px" },
    // => @media (max-width: 1023px) { ... }

    md: { max: "767px" },
    // => @media (max-width: 767px) { ... }

    sm: { max: "639px" },
    // => @media (max-width: 639px) { ... }

    xs: { max: "479px" },
    // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
};

