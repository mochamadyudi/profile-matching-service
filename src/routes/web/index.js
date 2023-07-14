import fs from 'fs'
import express from 'express'
import { config } from '@yid/config'
import { engine } from 'express-handlebars';
import path from 'path'
import moment from "moment";
import HandleBarConfig from "../../views/handlebars/config";
const helpers = {
  // Example: check if a value is equal to another value
  eq: function(a, b) {
    return a === b;
  },
  notEquals: function(a,b){
    return a !== b
  },
  dateFormat:
    function(date,format = 'YYYY-MM-DD hh:mm a'){
      return moment(date).isValid() ? moment(date).format(format) : "-"
    },
  or: function(a,b){
  
  },
  indexCalculate:
    /**
     *
     * @param {number} index
     * @param {number} value
     * @returns {number}
     */
    function(index, value){
      return index * value
    },
  ArrayNotNull:
    /**
     *
     * @param arr
     * @constructor
     */
    function(arr = []){
      return typeof(arr) !== 'undefined' && Array.isArray(arr) && arr.length > 0
    },
  notNull:
    /**
     *
     * @param {String | null | ''}value
     */
    function(value){
      return value !== '' && value !== null && value !== undefined
    },
  // Example: capitalize the first letter of a string
  capitalize: function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};

/**
 * view engine
 * @param app
 * @constructor
 */
function indexRoute(app){
  app.engine('hbs', engine({
    helpers: helpers,
    extname:'.hbs',
    partialsDir  : [
      //  path to your partials
      path.join(HandleBarConfig._,'template'),
    ]}));
  app.set('view engine', 'hbs');
  app.set('views', HandleBarConfig._);
  
  // app.get('/display/:type', (req,res)=> {
  //   let { type } = req.params
  //
  //   res.status(200)
  //   res.set("Content-Security-Policy", "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'")
  //   return res.render('index', {
  //     host:[process.env.APP_HOST,process.env.APP_PORT].join(':'),
  //     head:{
  //       title:type.toString(),
  //       subdomain:"TESTING"
  //     },
  //     app:"HEHEH",
  //     configs:[
  //       {
  //         type:type,
  //         template: [type,'index'].join('/'),
  //         data:"Domestic \nEconomy Class"
  //       }
  //     ]
  //   })
  // })
}

/**
 * static
 * @param app
 * @constructor
 */
function ViewStatic(app) {
  let client = config.client;

  if (!fs.existsSync(config.client)) {
    client = `${config.base}/views/default`;
  }
  if (typeof (process.env.APP_VIEW_STATIC_FILE) !== 'undefined' && process.env.APP_VIEW_STATIC_FILE) {
    app.use(express.static(client));
    app.get('/*', (req, res) => {
      return res.sendFile(path.resolve(client, process.env.APP_VIEW_STATIC_FILE));
    })
  }
}
export default (app)=> {
  /**
   * path disabled
   */
  app.get(config.path.disabled, (req, res) => {
    if (res.statusCode === 400) {
      return res.status(400).sendFile(`${config.base}/views/400.html`)
    }
    return res.status(404).sendFile(`${config.base}/views/404.html`)
  })

  if (typeof (process.env.APP_VIEW_MODE) !== 'undefined') {
    switch (process.env.APP_VIEW_MODE) {
      case "engine":
        new indexRoute(app)
        break;
      case "static":
      default:
        new ViewStatic(app)
        break;
    }
  }
}