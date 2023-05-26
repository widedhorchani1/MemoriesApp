const post=require("../../models/post")

module.exports = async (req,res) => {
    try {
        let {id}=req.params;
        await post.findByIdAndRemove(id)
        res.status(200).json({
            status:true,
            message:"Your post has been deleted successfly"
        })
        
    } catch (error) {
         if (error) throw error
         res.status(400).json({
            status:false,
            error
         })
        
    }
}