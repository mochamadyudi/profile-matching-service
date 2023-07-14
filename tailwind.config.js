/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  mode:'jit',
  content: [
      "./src/views/handlebars/*.{html,hbs,js}",
      "./src/views/handlebars/**/*.{html,hbs,js}",
      "./src/views/handlebars/**/**/*.{html,hbs,js}",
      "./src/views/handlebars/**/**/**/*.{html,hbs,js}",
      "./src/views/handlebars/**/**/**/**/*.{html,hbs,js}",
      "./src/views/handlebars/**/**/**/**/**/*.{html,hbs,js}",
      "./src/views/handlebars/**/**/**/**/**/**/*.{html,hbs,js}",
      "./src/views/handlebars/**/**/**/**/**/**/**/*.{html,hbs,js}",
      "./src/views/handlebars/**/**/**/**/**/**/**/**/*.{html,hbs,js}",
      "./src/views/handlebars/**/**/**/**/**/**/**/**/**/*.{html,hbs,js}",
      "./src/views/handlebars/**/**/**/**/**/**/**/**/**/**/*.{html,hbs,js}",
      "./src/views/handlebars/**/**/**/**/**/**/**/**/**/**/**/*.{html,hbs,js}",
      "./src/views/handlebars/**/**/**/**/**/**/**/**/**/**/**/**/*.{html,hbs,js}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
