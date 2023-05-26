const express=require("express")
const app=express()
const mongoose=require("mongoose")
require('dotenv').config()
const user =require ("./models/user")
const URI =process.env.URI
mongoose.connect(URI).then(()=>console.log("conneted to the database")).catch((err)=>console.dir(err))
app.get('/',(req,res)=>{
    res.send("hello memories app")
})
app.use(express.json())
app.use("/api/myapp/user",require("./routes/user"))
//app.use("/api/myapp/admin",require("./routes/admin"))

const Port=5000 || process.env.Port
app.listen(Port,(err)=>{
    if(err) throw err;
    console.log("server is runnig ")
})