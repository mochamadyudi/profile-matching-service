require('dotenv/config');
const path = require('path')
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const environment = require('./configuration/environment')
const { first } = require('lodash')
const chalk = require('chalk')

console.log(
  chalk.greenBright(`
${chalk.greenBright(`=================================================`)}
${chalk.greenBright('Message')}: [ ${chalk.whiteBright.bgCyanBright(`   Build Theme progress `)} ]
${chalk.greenBright('Author:')} ${chalk.cyanBright('Mochamad Yudi sobari')}
${chalk.greenBright('Github:')} ${chalk.cyanBright('http://github.com/mochamadyudi')}
${chalk.greenBright(`=================================================`)}`))

let entries = {}
var arrayOfFiles = fs.readdirSync(environment.paths.source);
arrayOfFiles.forEach( function (file) {
  fs.readdirSync(path.resolve(environment.paths.source,file))
    .forEach((child)=> {
      if(child === 'assets'){
        fs.readdirSync(path.resolve(environment.paths.source,file,child))
          .forEach((child2)=> {
            if(child2 !== 'image' && child2 !== 'icon'){
              fs.readdirSync(path.resolve(environment.paths.source,file,child,child2))
                .forEach((child3)=> {
                  Reflect.set(entries,[file,child,child2,first(child3.split('.'))].join('/'),path.join(environment.paths.source,file,child,child2,child3))
                })
            }
          })
      }
    })
});

module.exports = {
  entry: entries,
    output: {
     path: environment.paths.output,
      asyncChunks: true,
      clean:true,
      // filename: '[name].js'
   },
  resolve:{
  },
  module: {
    rules: [
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: environment.limits.images,
          },
        },
        generator: {
          filename: 'images/design/[name].[hash:6][ext]',
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: environment.limits.images,
          },
        },
        generator: {
          filename: 'images/design/[name].[hash:6][ext]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  ].concat(),

};
