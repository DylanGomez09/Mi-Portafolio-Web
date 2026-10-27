/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#050505',
        paper: '#F2F2F0',
        secondary: '#9A9A96',
        faint: '#5F5F5C',
        line: '#262626',
        card: '#0E0E0E',
        edge: '#1D1D1D',
        title: '#E6E6E2',
      },
      fontFamily: {
        sans: ['Inter Tight', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        editorial: '1480px',
      },
      letterSpacing: {
        tightest: '-0.06em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.35', transform: 'scale(0.72)' },
        },
        'hero-photo': {
          '0%': { opacity: '0', transform: 'scale(1.04)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'hero-text': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
