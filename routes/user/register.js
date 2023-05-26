const user=require("../../models/user")
const bcrypt=require("bcrypt")
module.exports = async(req,res)=>{
    try {
        let {firstName,lastName,email,password,birthDate,phone,address,userImg}=req.body
        let testUser= await user.findOne({email,phone})
        console.log("testUser:" ,testUser)
        if (testUser){
            return res.status(400).json({
                status:false,
                error:"E-mail or Phone number already exist, please try another one"            
            })
        }
        let salt=await bcrypt.genSalt(10)
        const hashedPassword= await bcrypt.hash(password,salt)


        let newUser= new user ({
            
                firstName,
                lastName,
                email,
                password:hashedPassword,
                birthDate,
                phone,
                address,
                userImg
            
        })
        await newUser.save()
        res.status(200).json({
            status:true,
            message:"your acount has been created successfuly"
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