import express from "express";
import homeController from "../controller/homeController"
let router=express.Router();

let initwebroute=(app)=>{
    router.get("/home",homeController.homePage)
    router.get("/",(req,res)=>{
        res.send("hellowww");
    });
    return app.use("/",router);
}
module.exports=initwebroute;