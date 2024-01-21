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
        loading: 'loadingAnimation 1.5s ease-in-out infinite ',
        fadeOut: 'fadeOut 2s ease-in-out'
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
        loadingAnimation: {
          'from, to': { backgroundImage: "url('../public/conuhackslogo_nobgv2-1.png')", transform: 'scale(0.5)' },
          '12%': { transform: "scale(0.5) rotate(0deg)" },
          '21%, 32%': { backgroundImage: "url('../public/conuhackslogo_nobgv2-2.png')" },
          '23%, 27%': { backgroundImage: "url('../public/conuhackslogo_nobgv2-3.png')" },
          '18%, 39%': { backgroundImage: "url('../public/conuhackslogo_nobgv2-1.png')" },
          '42%': { transform: 'scale(0.5) rotate(360deg)' },

          '88%': { transform: "scale(0.5) rotate(0deg)" },
          '71%, 79%': { backgroundImage: "url('../public/conuhackslogo_nobgv2-2.png')" },
          '77%, 73%': { backgroundImage: "url('../public/conuhackslogo_nobgv2-3.png')" },
          '82%, 68%': { backgroundImage: "url('../public/conuhackslogo_nobgv2-1.png')" },
          '62%': { transform: 'scale(0.5) rotate(360deg)' },
        },
        fadeOut: {
          '0%': {opacity: 1},
          '100%': {opacity: 0}
        }
      },
    },
  },
  plugins: [],
}

