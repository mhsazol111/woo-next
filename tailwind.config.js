module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        // sm: '1rem',
        // lg: '2rem',
        // xl: '2rem',
      },
    },
    minHeight: {
      'without-header': 'calc(100vh - 118px)',
    },
    extend: {},
  },
  corePlugins: {
    float: false,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
