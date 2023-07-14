import express from "express";
import path from "path";
import proxy from "express-http-proxy";

export default async (app)=> {
  /**
   * API
   */
  await require('./api').default(app)

  /**
   * WEB
   */
  
  app.get('/display/show/:username',function(req,res,next){
    let { username } = req.params
    
    res.status(200)
    proxy(`http://192.168.1.30:5008/display/show/${username}`)(req, res, next);
  })

  app.get('/',function(req,res){
    res.redirect('/auth/login')
  })
  app.use(express.static(path.resolve(__dirname,"..", "..", "clients", "build")))
  app.get("*", (req, res, next) => {
    res.status(200)
    res.set('Content-Security-Policy', "script-src 'self' 'unsafe-inline'");
    // req.setHeader('Content-Security-Policy', "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'");
    res.set("Content-Security-Policy", "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'")
    return res.sendFile(path.resolve(__dirname,"..", "..", "clients", "build", "index.html"));
  });
}