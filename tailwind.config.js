module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: 'hsl(207, 73%, 52%)',
          default: 'hsl(207, 73%, 57%)',
          darker: 'hsl(207, 73%, 44%)'
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
