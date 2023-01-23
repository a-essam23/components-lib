/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                root: "var(--theme-color-root)",
                light: "var(--theme-color-light)",
                lighter: "var(--theme-color-lighter)",
                dark: "var(--theme-color-dark)",
                darker: "var(--theme-color-darker)",
                control: "var(--theme-color-control)",
                wild: "var(--theme-color-wild)",
            },
            borderRadius: {
                primary: "var(--theme-rounded-primary)",
                secondary: "var(--theme-rounded-secondary)",
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
