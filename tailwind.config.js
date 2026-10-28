/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#800000',
          dark: '#5a0000',
          light: '#9a1a1a',
        },
        crimson: {
          DEFAULT: '#C8102E',
          hover: '#a00d24',
          light: '#e63956',
        },
        cream: {
          DEFAULT: '#FFF2D5',
          light: '#FFF9ED',
          dark: '#F5E4BE',
        },
        navy: {
          DEFAULT: '#003049',
          dark: '#001e30',
          light: '#0a4261',
          muted: '#1e4860',
        },
        softblue: {
          DEFAULT: '#669BBC',
          light: '#8ebbd6',
          pale: '#e2edf5',
          dark: '#4c7a96',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'glow-crimson': '0 0 25px -5px rgba(200, 16, 46, 0.35)',
        'glow-blue': '0 0 25px -5px rgba(102, 155, 188, 0.4)',
        'premium': '0 12px 35px -10px rgba(0, 48, 73, 0.08), 0 4px 12px -2px rgba(0, 48, 73, 0.04)',
        'premium-hover': '0 20px 40px -12px rgba(0, 48, 73, 0.14), 0 8px 20px -4px rgba(0, 48, 73, 0.08)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-reverse': 'float-reverse 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'software-strip': 'marquee-strip 30s linear infinite',
        'org-marquee': 'marquee-org 28s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'marquee-strip': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
        'marquee-org': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.333%)' },
        }
      }
    },
  },
  plugins: [],
}
