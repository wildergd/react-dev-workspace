import flowbite  from 'flowbite-react/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./docs/**/*.stories.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  safelist: [
    'bg-slate-50',
    'bg-zinc-700',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}
