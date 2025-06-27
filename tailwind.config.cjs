/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                // Primary brand colors
                primary: '#334155', // slate-700
                accent: '#04d9ff',
                'accent-dark': '#02bdde',

                // Text colors
                'text-primary': '#ffffff', // white
                'text-secondary': '#e2e8f0', // slate-200
                'text-muted': '#64748b', // slate-500
                'text-muted-light': '#8190a6', // slate-300
                'text-dark': '#1e293b', // slate-800

                // Background colors
                'bg-primary': '#ffffff', // white
                'bg-secondary': '#f8fafc', // slate-50
                'bg-muted': '#f1f5f9', // slate-100
                'bg-muted-dark': '#8190a6', // slate-400

                // Border colors
                'border-light': '#e5e7eb', // gray-200
            },
        },
    },
    plugins: [],
};
