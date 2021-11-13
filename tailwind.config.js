module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        xl: null,
        '2xl': null,
      },
      scale: {
        '-100': '-1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
