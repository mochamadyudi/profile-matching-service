import 'dotenv/config';
import express from 'express';
import http from "http";
import path from 'path'
import WebSocket from "./lib/modules/web-socket";
import proxy from 'express-http-proxy'
const app = express();
const server = http.createServer(app);

(async function run(){

    if(Array.isArray(process.argv) && process.argv.filter((item)=> item === '--init').length > 0 ){
        await require('../app/init');
    }

    await require('./lib/helper/index');
    app.use(express.static('public/uploads'))
    app.use(express.static('public'))
    /**
     * @title - pattern express
     */
    await require('./lib/express').default(app);

    await require('./routes').default(app)


    /**
     * @title - handler
     */
    await require('./lib/handler').default(app)

    /**
     * @name Database-Connected
     */
    await require('./lib/database/index')
    
    /**
     * STATIC
     */
    
    new WebSocket({server});

    // new SocketIoModule(server);
    /**
     * @default - listener
     * @description app listener change port here
     */
    await require('./lib/express/listen').default(server)
})()