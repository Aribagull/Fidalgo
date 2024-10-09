/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        satisfy: ['Dancing Script', 'cursive'],
        baskervville: ['Baskervville SC','serif'],
       },

       


      
      colors: {
      cyan: {
        '600' : "#102b2a",
      },
      width: {
        '99': '99%',
      },
      height: {
        '90': '90vh',
      },  
    },
    animation: {
      'spin-slow': 'spin 10s linear infinite',
      'spin-reverse-slow': 'spin-reverse 10s linear infinite',
    },
    keyframes: {
      'spin-reverse': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },

      
    },
    keyframes: {
      'word-move-right': {
        '0%': { transform: 'translateX(-100%)', opacity: 0 },
        '100%': { transform: 'translateX(0)', opacity: 1 },
      },
    },
    animation: {
      'word-move-right': 'word-move-right 4s ease-out forwards',
    },

    keyframes: {
      'word-move-left': {
        '0%': { transform: 'translateX(100%)', opacity: 0 },
        '100%': { transform: 'translateX(0)', opacity: 1 },
      },
    },
    animation: {
      'word-move-left': 'word-move-left 3s ease-out forwards',
    },


    spacing: {
      'word-spacing': '10px', 
    },

    keyframes: {
        wordMoveRight: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'word-move-right': 'wordMoveRight 1s ease forwards',
      },
    

  },
  },
  plugins: [],
}