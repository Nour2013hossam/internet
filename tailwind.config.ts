import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: '#38bdf8'
      },
      boxShadow: {
        glow: '0 0 40px rgba(56, 189, 248, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;
