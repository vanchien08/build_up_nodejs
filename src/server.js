import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initwebroute from "./route/web";
require('dotenv').config(); // để chạy process.env
let app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

viewEngine(app);
initwebroute(app);


let port=process.env.PORT || 6969;
app.listen(port,()=>{
    console.log("port>>>",port)
})