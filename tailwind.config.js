/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#002245',
          navy: '#0d2d4e',
          accent: '#7ed956',
          accentHover: '#6cbf3a',
          slate: '#183f70',
          greyBg: '#f7f7f7',
          border: '#e5e5e5',
          textMuted: '#808080',
          textDark: '#333333',
        }
      },
      fontFamily: {
        din: ['DIN', 'Arial', 'sans-serif'],
        sans: ['AASmartSans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'topindus': '0 5px 20px 1px rgba(0,0,0,0.06)',
        'topindus-hover': '0 5px 50px 1px rgba(31,84,7,0.12)',
        'modal': '0 10px 40px rgba(0,0,0,0.25)',
      }
    },
  },
  plugins: [],
}
