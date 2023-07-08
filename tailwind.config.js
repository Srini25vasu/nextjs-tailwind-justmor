/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '390px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px'
    },
    extend: {},
    fontFamily: {
      raleway: ['Raleway', 'sans-serif']
    }
  },
  plugins: [],
}
