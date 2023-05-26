const post =require("../../models/post")

module.exports =async (req,res)=>{
    try {
        let {userId}=req.params
        let posts=await post.find({userId})
        res.status(200).json({status:true,data:posts})
    } catch (error) {
       if(error)throw error;
       res.statust(401).json({status:false,error}) 
    }
}