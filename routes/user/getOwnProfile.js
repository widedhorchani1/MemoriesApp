const User= require ("../../models/user")

module.exports = async (req,res)=>{
try {
    let {id}=req.params
    const user= await User.findById(id).select(" -email -password")
    res.status(200).json({status:true,data:user})
} catch (error) {
    if (error)throw error
    res.status(400).json({status:false, error})
}

}