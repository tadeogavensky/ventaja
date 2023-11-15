// eslint-disable-next-line
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      heading: ["Montserrat"],
      body: ["Roboto"],
      ventaja: ["Major Mono Display", ""],
      lexend: ["Lexend Deca"],
    },
    extend: {
      colors: {
        // Puedes agregar colores personalizados aquí
        white: "#ffffffff", // Naranja brillante
        platinum: "#e5e5e5ff", // Gris oscuro
        orangeWeb: "#fca311ff", // Azul intenso
        oxfordBlue: "#14213dff", // Blanco
        black: "#000000ff", // Marrón oscuro
      },
    },
  },
  plugins: [],
};

export default config;
