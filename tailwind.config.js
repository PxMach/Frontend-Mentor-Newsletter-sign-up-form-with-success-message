/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            midnight: "var(--color-midnight)",
         },
      },
   },
   plugins: [],
};
