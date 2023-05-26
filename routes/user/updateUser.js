const user=require("../../models/user")

module.exports = async (req,res)=>{
    try {
        let {id}=req.params;
       const updatePost= await post.findByIdAndUpdate(
        id,
        {$set: {...req.body}},
        {new:true});
        res.status(200).json({
        status:true,
      message:"your profile has been updated successfly",
      data:updatePost
       })
    } catch (error) {
        if (error.errors.firstName) {
          return res
            .status(401)
            .json({ status: false, error: error.errors.firstName.message });
        }
         else if (error.errors.lastName) {
          return res
            .status(401)
            .json({ status: false, error: error.errors.lastName.message }) }
            else if (error.errors.email) {
          return res
            .status(401)
            .json({ status: false, error: error.errors.email.message });
        } else if (error.errors.password) {
          return res
            .status(401)
            .json({ status: false, error: error.errors.password.message });
        } else if (error.errors.birthDate) {
          return res
            .status(401)
            .json({ status: false, error: error.errors.birthDate.message });
        }else if (error.errors.phone) {
            return res
              .status(401)
              .json({ status: false, error: error.errors.phone.message });
        }else if (error.errors.address) {
          return res
            .status(401)
            .json({ status: false, error: error.errors.address.message });
        }else if (error.errors.userImg) {
            return res
              .status(401)
              .json({ status: false, error: error.errors.userImg.message });
        }

      }
        
    
}