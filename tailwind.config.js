/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-opacity': 'rgba(68, 68, 68, 0.295)',
        'custom-gray': '#818181',
        'custom-red': '#c70025',
        'dark-blue': '#0a0a0a',
        'orange-peel': '#f59e0b',
        'dark-blue-1': '#140e18',
        primary: "#c70025",
        black: "#140E18",
        secondary: "#3E3942",
        paraColor: "#9C9A9E",
        footerBG: "#17202B",
      },
      screens: {
        mobile: "640px",
        tablet: "768px",
        laptop: "1000px",
        desktop: "1200px",
      },
      fontSize: {
        "5.5xl": "3.375rem",
        "4.4xl": "40px",
      },
      animation: {
        spin: 'spin 1s linear infinite',
      },
      width: {
        400: "400px",
        200: "200px",
      },
      backgroundSize: {
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
      },
      minHeight: {
        authPage: 'calc(100vh - 104px)',
      },
      maxHeight: {
        aboutUs: 'calc(120vh - 97px)'
      },
      fontFamily: {
        'poppins': ['Poppins', 'san-serif'],
        title: ["Switzer", "sans-serif"],
        body: ["Satoshi", "sans-serif"],
      },
      listStyleType: {
        'lower-alpha': 'lower-alpha',
      },

    },
  },
  plugins: [],
}