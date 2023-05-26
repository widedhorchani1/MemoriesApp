const express=require("express")
const router=express.Router()

router.post("/login",require("./login"))
router.get("/getUsers",require("./getUsers"))
router.get("/getPosts",require("./getPosts"))
router.put("/banUser/:id",require("./banUser"))
router.delete("/deletPost/:id",require("./deletPost"))
module.exports=router