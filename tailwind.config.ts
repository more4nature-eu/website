import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '3.75rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Legend', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        blue: {
          200: '#F0F8FF',
          500: '#E1F2FF',
          700: '#6A86BB',
        },
        green: {
          200: '#F9F8D8',
          500: '#E4EA80',
          700: '#237471',
        },
        grey: {
          400: '#D1D6D9',
          500: '#BAC0C3',
          600: '#6E7C86',
          800: '#243B4A',
          900: '#16242E',
        },
        red: {
          500: '#DD4657',
        },
        orange: {
          200: '#FBF2E3',
          500: '#F8BA88',
          700: '#96635B',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      // keyframes: {
      //   'accordion-down': {
      //     from: { height: '0' },
      //     to: { height: 'var(--radix-accordion-content-height)' },
      //   },
      //   'accordion-up': {
      //     from: { height: 'var(--radix-accordion-content-height)' },
      //     to: { height: '0' },
      //   },
      // },
      // animation: {
      //   'accordion-down': 'accordion-down 0.2s ease-out',
      //   'accordion-up': 'accordion-up 0.2s ease-out',
      // },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
