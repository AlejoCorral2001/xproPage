module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: 'hsl(28, 73%, 55%)',
          default: 'hsl(28, 73%, 50%)',
          darker: 'hsl(28, 73%, 45%)'
        }
      },
      animation: {
        bounced: 'bounced 1s infinite',
        ping: 'ping 2.5s infinite',
      },
      keyframes: {
        bounced: {
          '0%, 100%': {
            transform: 'scale(0.5)',
          },
          '50%':{
            transform: 'scale(1)',
          }
        }
      }

    }
  },
  variants: {},
  plugins: []
};
