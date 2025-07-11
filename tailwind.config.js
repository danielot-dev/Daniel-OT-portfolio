// @ts-check

const config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#001f3f',
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#b9ddfe',
          300: '#7cc2fd',
          400: '#36a3fa',
          500: '#0c8aeb',
          600: '#006cc8',
          700: '#0156a2',
          800: '#064986',
          900: '#0b3d6f',
          950: '#001f3f',
        },
        gold: {
          DEFAULT: '#FFD700',
          50: '#fff9e6',
          100: '#ffefb3',
          200: '#ffe680',
          300: '#ffdc4d',
          400: '#ffd11a',
          500: '#FFD700',
          600: '#e6c200',
          700: '#b39600',
          800: '#806b00',
          900: '#4d4000',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

module.exports = {
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0a0a14',
          900: '#0f172a',
          800: '#1e293b',
          200: '#e2e8f0',
        },
        gold: {
          500: '#d4af37',
          600: '#b7950b',
        }
      },
      boxShadow: {
        'gold-lg': '0 10px 25px -5px rgba(212, 175, 55, 0.3)',
        'gold-sm': '0 4px 6px -1px rgba(212, 175, 55, 0.2)',
      }
    }
  }
}

module.exports = config