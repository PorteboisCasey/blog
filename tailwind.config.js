/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          hover: '#4f46e5'
        },
        secondary: {
          DEFAULT: '#f472b6',
          hover: '#db2777'
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'text-gradient': 'text-gradient 1.5s linear infinite'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
