// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['Montserrat','Arial','Helvetica','sans-serif'],
      },
      colors: {
        reddish: "rgb(228, 18, 46)",
      },
    },
   
  },
  plugins: [],
}