module.exports = {
  mode: 'aot',
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts,js}'],
  theme: {
    fontFamily: {
      roboto: ['roboto'],
    },
    extend: {
      width: {},
      opacity: {
        10: '0.1',
        20: '0.2',
        30: '0.3',
        40: '0.4',
        50: '0.5',
        60: '0.6',
        70: '0.7',
        80: '0.8',
        90: '0.9',
      },
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
      crosshair: 'crosshair',
      'zoom-in': 'zoom-in',
    },
  },
  variants: {
    extend: {
      margin: ['last', 'even'],
    },
  },
  plugins: [],
};
