/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Ensure this is set to 'class' for class-based dark mode

  theme: {
    extend: {
      colors: {
       'button-bg':"#FF6F20",
       'button-hover':"#E76F51",
       'main-bg':"#F4F4F4",
       'card-bg':'#FFFFFF',
       "text-color":'#264653',
      },
    },
  },
  plugins: [],
};
