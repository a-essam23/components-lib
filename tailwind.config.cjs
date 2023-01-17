/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-light": "var(--primary-color-light)",
                primary: "var(--primary-color)",
                "primary-dark": "var(--primary-color-dark)",
                "primary-text": "var(--primary-color-text)",
                "secondary-light": "var(--secondary-color-light)",
                secondary: "var(--secondary-color)",
                "secondary-dark": "var(--secondary-color-dark)",
                "secondary-text": "var(--secondary-color-text)",
            },
            spacing: {
                88: "22rem",
                112: "28rem",
                116: "29rem",
                120: "30rem",
                128: "32rem",
                144: "36rem",
                154: "38rem",
                158: "39rem",
                160: "40rem",
                168: "42rem",
                184: "46rem",
                200: "50rem",
                216: "54rem",
                220: "55rem",
                224: "56rem",
                232: "58rem",
                280: "70rem",
            },
            transitionDelay: {
                50: "50ms",
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-1.5deg)" },
                    "50%": { transform: "rotate(1.5deg)" },
                },
                beat: {
                    "0%, 100%": { scale: "98%" },
                    "50%": { scale: "102%" },
                },
            },
            animation: {
                wiggle: "wiggle 1s ease-in-out infinite",
                beat: "beat 1s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
