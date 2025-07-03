module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      keyframes: {
        'marquee-alternate': {
          '89%': { transform: 'translateX(30%)' },
          '100%': { transform: 'translateX(-10%)' },
        },
      },
      animation: {
        'marquee-alternate': 'marquee-alternate 5s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
  
}


