/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: '14px',
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  safelist: [
    'text-sky-200',
    'text-sky-300',
    'text-sky-500',
    'hover:text-sky-500',
    'text-teal-200',
    'text-teal-500',
    'hover:text-teal-500',
    'text-yellow-200',
    'text-yellow-500',
    'hover:text-yellow-500',
    'text-orange-200',
    'text-orange-500',
    'hover:text-orange-500',
  ]
}
