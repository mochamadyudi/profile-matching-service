let mix = require('laravel-mix');
const path = require('path');

let pathJS = path.resolve(__dirname,'src','views','handlebars','assets','main.js')

let outputJS = path.resolve(__dirname,'src','views','template','assets','js')

mix
    .setPublicPath('./')
    .js(pathJS,outputJS)
    .sourceMaps()
    .version();
