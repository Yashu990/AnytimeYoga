/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                yoga: {
                    sage: {
                        50: '#f5f9f6',
                        100: '#e6f2e9',
                        200: '#cde5d5',
                        300: '#a8d1b5',
                        400: '#7bb68d',
                        500: '#5a9c6f',
                        600: '#487d59',
                        700: '#3a6447',
                        800: '#30503a',
                        900: '#294231',
                    },
                    lavender: {
                        50: '#f9f7fc',
                        100: '#f1ecf9',
                        200: '#e6ddf4',
                        300: '#d3c3eb',
                        400: '#b89fdd',
                        500: '#9d7acc',
                        600: '#8660ba',
                        700: '#6f4c9f',
                        800: '#5e4285',
                        900: '#4e376d',
                    },
                    peach: {
                        50: '#fef7f3',
                        100: '#fdeee5',
                        200: '#fbd9ca',
                        300: '#f8bda5',
                        400: '#f49672',
                        500: '#ee744c',
                        600: '#dc5731',
                        700: '#b84426',
                        800: '#933924',
                        900: '#783320',
                    },
                    cream: {
                        50: '#fdfbf7',
                        100: '#fcf8f0',
                        200: '#f8f0dd',
                        300: '#f3e5c5',
                        400: '#edd4a4',
                        500: '#e5c185',
                        600: '#d6a962',
                        700: '#bd8c4d',
                        800: '#9a7042',
                        900: '#7e5c38',
                    }
                },
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
                'display': ['Outfit', 'Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-calm': 'linear-gradient(135deg, #f5f9f6 0%, #f9f7fc 50%, #fef7f3 100%)',
                'gradient-hero': 'linear-gradient(135deg, #a8d1b5 0%, #b89fdd 50%, #f8bda5 100%)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'fade-in': 'fadeIn 0.8s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
