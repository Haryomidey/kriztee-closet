/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0a0a",
                foreground: "#ffffff",
                primary: {
                    DEFAULT: "#ffffff",
                    foreground: "#0a0a0a"
                },
                secondary: {
                    DEFAULT: "#1a1a1a",
                    foreground: "#ffffff"
                },
                muted: {
                    DEFAULT: "#262626",
                    foreground: "#a3a3a3"
                },
                border: "#333333",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
}