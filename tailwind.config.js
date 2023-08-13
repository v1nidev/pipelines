/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.6rem',
      }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(purple|orange|blue|cyan|pink|gray)-(50|200|300)/,
    },
    {
      pattern: /border-(purple|orange|blue|cyan|pink|gray)-(100)/,
    },
    {
      pattern: /text-(purple|orange|blue|cyan|pink|gray)-(900)/,
    },
  ],
}
