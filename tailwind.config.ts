import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        md: '3.75rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Legend', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        '2xl': '1400px',
      },
      fontSize: {
        '2xs': [
          '0.625rem',
          {
            lineHeight: '1.25rem',
          },
        ],
        lg: [
          '1.25rem',
          {
            lineHeight: '1.5rem',
          },
        ],
        xl: [
          '2.375rem',
          {
            lineHeight: '3rem',
          },
        ],
        '2xl': [
          '4rem',
          {
            lineHeight: '4.25rem',
            fontWeight: '700',
          },
        ],
        '3xl': [
          '5.625rem',
          {
            lineHeight: '4.75rem',
            fontWeight: '700',
          },
        ],
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
        '4xl': 'calc(var(--radius) * 4)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      aria: {
        invalid: 'invalid="true"',
      },
      gridTemplateColumns: {
        partners: 'repeat(4, minmax(0, 242px))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
