/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily:{
      cario: ["Cairo","sans-serif"]
    },
    colors:{
      bluee:'#023AA2',
      blueedark: '#002a79',
      blackk: '#212529',
      borderGrey: '#ced4da',
      textBlack: '#212529',
      borderBluee: '#86b7fe'
    },
    boxShadow:{
      '3xl':'rgba(0, 0, 0, 0.23) 0px 3px 6px;',
      '4xl': 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px'
    },
    backgroundImage:{
      'tubg2': "url('./Images/tubg2.jpg')",
      'tubg3': "url('./Images/tubg3.jpg')",
      'admissionBg': "url('./Images/admissionbg.png')",
      'facilitiesBg': "url('./Images/facilitiesbg.png')",
      'contactBg': "url('./Images/contactbg.png')",
      'galleryBg': "url('./Images/gallerybg.png')",
      'noticeBg': "url('./Images/noticebg.png')",
      'aboutBg': "url('./Images/aboutbg.png')",
    }
  },
  plugins: [require('flowbite/plugin')],
}
