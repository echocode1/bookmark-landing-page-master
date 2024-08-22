/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm :'480px',
      md :'640px',
      lg :'976px',
      xl : '1200px',
      xxl: '1400px'
    },
    extend: {
      colors : {
        "softBlue":"hsl(231, 69%, 60%)",
        "softRed" : "hsl(0, 94%, 66%)",
        "grayishBlue" : "hsl(229, 8%, 60%)",
        "veryDarkBlue" : "hsl(229, 31%, 21%)",
        'darkRed' : "hsl(0, 46%, 53%)"
      },
      fontFamily : {
        "Rubik" : "Rubik"
      },
      borderRadius : {
        'half': "40%",
        'medium': "36%",
        "mini": "27%",
        'sm' : '10px',
        'xl' : '5px'
      },
      fontSize : {
        "12px" : '12px',
        '14px' : '14px',
        '11px': '11px',
        '10px': '10px'
      },
      letterSpacing : {
        '3px' : '4px'
      },
      width : {
        '70px': '70px',
        "90px":'90px'
      }
    },
  },
  plugins: [],
}

