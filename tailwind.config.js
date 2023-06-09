/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },

    extend: {
      transitionProperty: {
        height: "height",
      },
      borderRadius: {
        "radius-1": "0.25rem",
        "radius-2": "0.75rem",
        "radius-3": "1rem",
      },
      colors: {
        "gray-1": "#212529",
        "gray-2": "#495057",
        "gray-3": "#CED3D7",
        "gray-4": "#F1F3F5",
        "gray-5": "#F8F9FA",
      },
      fontSize: {
        "heading-1": "44px",
        "heading-2": "28px",
        "heading-3": "24px",
        "heading-4": "20px",
        "body-1": "16px",
        "body-2": "14px",
      },
      fontWeight: {
        400: "400",
        500: "500",
        600: "600",
        700: "700",
      },
    },
  },
  plugins: [],
};
