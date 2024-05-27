const path = require('path');
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'selector',
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        path.join(path.dirname(require.resolve('@namespace/react-components')), '**/*.js'),
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
