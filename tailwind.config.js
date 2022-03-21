module.exports = {
  mode: 'jit',
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'body': ['Playfair display']
    },
    extend: {
      backgroundImage: theme => ({
        'blossom': "url('/images/Anime Background.jpg')",
        'projects': "url('/images/Anime Scenery.jpg')"
      }),
      colors: {
        '#2b1055': '#2b1055',
        '#7597de': '#7597de',
        '#fff' :'#fff',
        '#1c0522': '#1c0522',
        'rgba(0,0,0.5)': 'rgba(0,0,0,.5)'
      }
    }
  },
  plugins: [
    require ('@tailwindcss/typography'),
  ],
  variants: {
    extend: {
      opacity: ["group-hover"]
    }
  }
}
