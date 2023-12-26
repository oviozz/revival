
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        logoBlue: '#146CA3',
        logoHover: '#1881c2'
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('flowbite/plugin')],
}