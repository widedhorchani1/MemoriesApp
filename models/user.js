const mongoose=require("mongoose")
const Schema=mongoose.Schema

const userSchema=new Schema({
    firstName: {
        type: String,
        required: [true, "The first name is a required field"],
       // minLength:[5,"The first name minumum length is 5"]
      },
      lastName: {
        type: String,
        required: [true, "The last name is a required field"],
       // minLength:[5,"The last name minumum length is 5"]
      },
      email: {
        type: String,
        match: [
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          "Invalid e-mail",
          "The e-mail is a required field",
        ],
        required:[true,"Invalid e-mail"]
      },
      password: {
        type: String,
       /* match:[/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Password must containt a minimun eigth character at least one letter, one number and one special character"],*/
        required:[true,"Password must containt a minimun eigth character"],
        minLength:[8,"Password must containt a minimun eigth character"],

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
      userId:{
        type:Schema.Types.ObjectId,
        ref:"Post"
      },
      isBanned:{
        type:Boolean,
        default:false
      },
      isUser:{
        type:Boolean,
        default:true
      },
      isAdmin:{
        type:Boolean,
        default:false
      },
      isBanned:{
        type:Boolean,
        defalt:false
      }
     
})
module.exports=user=mongoose.model("User",userSchema)