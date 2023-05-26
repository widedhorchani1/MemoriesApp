const Post =require("../../models/post")
module.exports= async (req,res)=>{
    try {
        let {title,date,description,postImg,category}=req.body;
        let {userId}=req.params
        let newPost= new Post ({
            title,
            date,
            description,
            postImg,
            category,
            userId
        })
        await newPost.save()
        res.status(200).json({
            status:true,
            message:"your post are added with success"
        })
        
    } catch (error) {
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
          }else {
        res.status(400).json({
            status:false,
            message:"Something is wrong , can't add the post"
        })
    }
    }
}