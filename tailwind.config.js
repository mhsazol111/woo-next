module.exports = {
  purge: {
    enabled: true,
    // content: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx', 'public/**/*.html'],
    content: ['./pages/**/*.js', './pages/**/*.jsx', './src/components/**/*.js', './src/components/**/*.jsx'],
  },
  // darkMode: 'media', // or 'media' or 'class'
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
