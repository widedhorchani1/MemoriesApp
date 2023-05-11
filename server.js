const express=require("express")
const app=express()
const mongoose=require("mongoose")
require('dotenv').config()

mongoose.connect("mongodb+srv://appmemorie:project@cluster0.nur31bh.mongodb.net/myapp?retryWrites=true&w=majority").then(()=>console.log("conneted to the database")).catch((err)=>console.dir(err))
app.get('/',(req,res)=>{
    res.send("hello memories app")
})
const Port=5000 || process.env.Port
app.listen(Port,(err)=>{
    if(err) throw err;
    console.log("server is runnig ")
})