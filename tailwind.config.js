/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        gradient: 'gradientAnimation 3s linear infinite',
        blinkingRecording: 'blinkingRecording 2s linear infinite',
      },
      keyframes: {
        gradientAnimation: {
          '0%': {
            backgroundPosition: '10% 0%',
          },
          '50%': {
            backgroundPosition: '100% 100%',
          },
          '100%': {
            backgroundPosition: '100% 0',
          },
        },
        blinkingRecording: {
          '0%': { transform: 'scale(1)'},
          '50%': { borderSize: '3', borderColor: '#f87171'}, // #fca5a5 #f87171
          '100%': { transform: 'scale(1)'},
        },
      },
    },
  },
  plugins: [],
}

