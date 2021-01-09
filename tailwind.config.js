module.exports = {
  purge: {
    enabled: false,
    // content: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx', 'public/**/*.html'],
    content: ['./pages/**/*.js', './pages/**/*.jsx', './components/**/*.js', './components/**/*.jsx'],
  },
  darkMode: 'media', // or 'media' or 'class'
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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
