module.exports = {
  darkMode: ['class', "[data-mode='dark']"],
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx', './src/layouts/**/*.tsx'],
  theme: {
    // fontFamily: {
    //   display: ['Inter', 'system-ui', 'sans-serif'],
    //   body: ['Inter', 'system-ui', 'sans-serif'],
    // },
    extend: {
      colors: {
        primary: {
          0: 'var(--background-primary-color)',
          50: 'var(--primary-color-50)',
          100: 'var(--primary-color-100)',
          200: 'var(--primary-color-200)',
          300: 'var(--primary-color-300)',
          400: 'var(--primary-color-400)',
          500: 'var(--primary-color-500)',
          600: 'var(--primary-color-600)',
          700: 'var(--primary-color-700)',
          800: 'var(--primary-color-800)',
          900: 'var(--primary-color-900)',
        },
      },
    },
  },
};
