/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            gridTemplateRows: {
                24: "repeat(24, minmax(0, 1fr))",
            },
            gridTemplateColumns: {
                24: "repeat(24, minmax(0, 1fr))",
            },
        },
    },
    plugins: [],
};
