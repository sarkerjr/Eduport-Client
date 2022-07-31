/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "side-drawer-bg": "#34495e",
                'routine-bg': '#f1f5f9',
                'routine-title-bg': '#2f4a5c',
            },
        },
    },
    plugins: [],
};
