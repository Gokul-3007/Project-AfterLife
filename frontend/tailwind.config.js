/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#050b17',
        panel: '#101b2d',
        accent: '#54c5ff',
        purple: '#8b5cf6',
        cyan: '#22d3ee',
      },
      boxShadow: {
        glow: '0 0 30px rgba(84,197,255,0.25)',
      },
    },
  },
  plugins: [],
};
