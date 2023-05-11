const mongoose=require("mongoose")
const Schema=mongoose.Schema

const userSchema=new Schema({
    name: {
        type: String,
        required: [true, "The username is a required field"],
      },
      email: {
        type: String,
        match: [
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          "Invalid e-mail",
          "The e-mail is a required field",
        ],
      },
      password: {
        type: String,
        minLength:[8,"Password maust containt a minimun eigth character"],
        required:[true,"Password maust containt a minimun eigth character"]
      },
      birthDate:{
        type:String
      }
      ,
      phone: {
        type: String,
        required: [true, "The phone  is a required field"],
      },
    
      address: {
        type: String,
        required: [true, "The address is a required field"],
      },
      userImg: {
        type: String,
        default:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/User.svg/2048px-User.svg.png",
      },
     
})
module.exports=user=mongoose.model("User",userSchema)