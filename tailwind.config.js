module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        neon: '#3b82f6',
        deep: '#030712'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(59,130,246,.4), 0 0 40px rgba(59,130,246,.2)'
      }
    },
  },
  plugins: [],
};
