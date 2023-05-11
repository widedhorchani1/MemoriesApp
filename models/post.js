const mongoose=require("mongoose")
const Schema=mongoose.Schema

const postSchema= new Schema ({
    title:{
        type:String,
        required:[true,"the title is a required field"]
    },
    date:{
        type:String,
        required:[true,"the date is a required field"]
    },
    description:{
        type:String,
        required:[true,"the date is a required field"]
    },
    postImg:{
        type:String,
        required:[true,"the date is a required field"]
    }
})

module.exports=post=mongoose.model("Post",postSchema)