/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tajawal': ['Tajawal', 'sans-serif'],
      },
      fontWeight: {
        'extralight': 200,
        'light': 300,
        'medium': 500,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },
      
      animation: {
        'slide-right': 'slide-right 1s linear infinite',
      },
      keyframes: {
        'slide-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      colors: {
        'text': '#060607',
        'backgroudcrl':'#f8f9fa',
        'primary': '#646daa',
        'secondry': '#959dd4',
        'accent': '#6d7ad6',
      },
      
    },
  },
  plugins: [],
}

