module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        Cairo: ["'Cairo'", 'sans-serif'],
        dancing: ["'Dancing Script'", 'cursive']
      },
      backgroundImage: {
        'hero': "url('./public/images/hero.jpg')"
      },
    },
  },
}
