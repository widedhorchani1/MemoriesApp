const post=require("../../models/post")

module.exports = async (req,res)=>{
    try {
        //let {Post}=req.body
        let {id}=req.params;
       const updatePost= await post.findByIdAndUpdate(
        id,
        {$set: {...req.body}},
        {new:true});
        res.status(200).json({
        status:true,
      message:"your post has been updated successfly",
      data:updatePost
       })
    } 
    catch (error) {
        if (error.errors.title) {
            return res
              .status(401)
              .json({ status: false, error: error.errors.title.message });
        } else if (error.errors.date) {
            return res
              .status(401)
              .json({ status: false, error: error.errors.date.message });
          } else if (error.errors.description) {
            return res
              .status(401)
              .json({ status: false, error: error.errors.description.message });
          } else if (error.errors.postImg) {
            return res
              .status(401)
              .json({ status: false, error: error.errors.postImg.message });
          }
        
    }
}