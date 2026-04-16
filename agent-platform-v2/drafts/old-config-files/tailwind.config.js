import baseConfig from '@agent-platform/tailwind-config';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [baseConfig],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/typography')],
};
