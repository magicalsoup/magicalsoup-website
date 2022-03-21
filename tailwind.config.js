module.exports = {
  mode: 'jit',
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // blog font doesn't actually work, need to find one
    fontFamily: {
      'body': ['Playfair display'],
      'blog': ['Platform']
    },
    extend: {
      backgroundImage: theme => ({
        'blossom': "url('/images/Anime Background.jpg')",
        'blog': "url('/images/Anime Gate Scenery.jpg')",
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
