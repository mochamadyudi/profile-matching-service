import express from 'express'
import bodyParser from "body-parser";
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override'
import passport from 'passport';
import session from 'express-session'
import cors from 'cors';
import morgan from 'morgan';
import {config} from '@yid/config'
import ExpressHeader from './header'


export default (app)=> {
    app.use(cors({
        origin: "*",
        methods: ['GET', 'POST','DELETE','PATCH','OPTIONS','PUT'], // Set the allowed HTTP methods
        allowedHeaders: ['Content-Type', 'Authorization'],
    }))
    
    app.use((req, res, next) => {
        res.setHeader('Content-Security-Policy', "script-src 'self' 'unsafe-inline'");
        res.header("Access-Control-Allow-Headers", "*");
        // res.header("Access-Control-Allow-Headers", ["Content-Disposition", "Origin", "Content-Type", "Accept", "Authorization"]);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", 'GET, POST, PUT, DELETE, PATCH');
        res.header("Access-Control-Allow-Credentials", 'true');
        next();
    });
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    app.use(cookieParser())

    app.use(express.urlencoded({extended: true}))

    app.use(express.json({extended: true}))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cookieParser());
    app.use(methodOverride());
    app.use(compression());
    app.use(helmet());
    app.use(cors({
        origin: true,
        credentials: true
    }));

    new ExpressHeader(app)

    if("twitter" in config.oAuth && config.oAuth.twitter.enabled)
        app.use(session({
            secret: config.secret,
            resave: false,
            saveUninitialized: false
        }))

    app.use(passport.initialize());
    app.use(passport.session());

    /**
     * @module morgan
     */
    if(config.log)
        app.use(morgan('dev'));
}