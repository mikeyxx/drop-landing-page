/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f9',
          100: '#ccebec',
          200: '#99d6d9',
          300: '#66c1c6',
          400: '#33acb3',
          500: '#2D5A5B',
          600: '#244849',
          700: '#1b3637',
          800: '#122425',
          900: '#091212',
        },
        secondary: {
          50: '#fff8f3',
          100: '#ffe6d9',
          200: '#ffccb3',
          300: '#ffb38d',
          400: '#FF9B5A',
          500: '#ff8533',
          600: '#e6751f',
          700: '#cc650b',
          800: '#b35500',
          900: '#994400',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
};