/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            gridColumnStart: {
                13: "13",
                14: "14",
                15: "15",
                16: "16",
                17: "17",
                18: "18",
                19: "19",
                20: "20",
                21: "21",
                22: "22",
                23: "23",
                24: "24",
            },
            gridRowStart: {
                8: "8",
                9: "9",
                10: "10",
                11: "11",
                12: "12",
                13: "13",
                14: "14",
                15: "15",
                16: "16",
                17: "17",
                18: "18",
                19: "19",
                20: "20",
                21: "21",
                22: "22",
                23: "23",
                24: "24",
            },
            gridTemplateRows: {
                24: "repeat(24, minmax(0, 1fr))",
            },
            gridTemplateColumns: {
                24: "repeat(24, minmax(0, 1fr))",
            },
            gridColumn: {
                "span-24": "span 24 / span 24",
            },
        },
    },
    plugins: [],
};
