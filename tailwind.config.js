/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'orange': '#ff7733',
      'lightBlue': '#e6fafe',
      'mediumBlue': '#ff7733',
      'darkBlue': '#69e3fc',
      'lightYellow': '#ffea80',
      'beige': '#F7F6E8',
      'white': '#FFFFFF',
      'bannerBlue': '#577492',
      'black': '#333333'
    },
    extend: {
      
    },
  },
  plugins: [],
};



  // fontFamily:{
  //   headingText: ['Libre-Baskerville']
  //   pText:['Poppins']
  // }

