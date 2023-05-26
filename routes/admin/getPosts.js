const Post=require("../../models/post")
module.exports=async (req,res)=>{
    try {
        const posts=await Post.find().select({title :0 ,postImg :0})
        res.status(200).json({
            status:true,
            data:posts
        })
    } catch (error) {
        if(error)throw error
        res.status(500).json({status:false,error})
    }
}