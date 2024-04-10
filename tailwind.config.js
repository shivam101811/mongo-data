// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto Sans', 'sans-serif'],
        'slab':["Roboto Slab", "serif"] 
      },
      colors: {
        customColor: 'rgb(0, 30, 43)',
        customColor1: '#00ED64',
        customColor2: "#001e2b",
        customColor3: "#333333",
        customColor4: "#00684A",
        customColor5: "#00ED64",
        customColor6: "#3D4f58",
        customColor7: '#023430',
        customColor8: '#001E2B',
        customColor9: '#051520',
        
      },
      padding: {
        'x-20': '20px', 
      }
    },
   
  },
  plugins: [],
}
