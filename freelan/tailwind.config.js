/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans'],
      'sans': ['Helvetica', 'Arial', 'sans-serif'],

  // Comma-delimited format:
  'sans': 'Helvetica, Arial, sans-serif',
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
    },
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'),require('@tailwindcss/forms')],
}

