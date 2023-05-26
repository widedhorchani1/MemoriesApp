const express=require("express")
const router=express.Router()
const user=require("../../models/user")
const post=require("../../models/post")


router.post("/register",require("./register"))
router.get("/:id",require("./getOwnProfile"))
router.post("/addpost/:userId",require("./addPost"))
router.post("/login",require("./login"))
router.get("/getownpost/:userId",require('./getOwnPost'))
router.put("/updatepost/:id",require("./updatePost"))
router.put("/updateuser/:id",require("./updateUser"))
router.delete("/deletepost/:id",require("./deletePost"))



module.exports=router