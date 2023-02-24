import mongoose from 'mongoose';
const Schema =mongoose.Schema;
const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String ,
        unique : true ,
        required : true
    },
    password : {
        type : String ,
        required : true ,
        length : 6
   },
   isAdmin :{
    type : Boolean,
    default : false
   }
},
{timestamps: true});
export default mongoose.model("User",userSchema);