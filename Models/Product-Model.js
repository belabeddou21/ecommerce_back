import mongoose from 'mongoose';

const Schema =mongoose.Schema;
const PoductSchema = new Schema({
    title : { type : String, required : true,unique : true},
    desc : {type : String,required : true},
    img : {type : String ,required : true},
    categories :{type : Array},
    price : {type : Number , required : true},
    size : {type : String},
    color : { type : String}
},
           {timestamps: true}
);
export default mongoose.model("Product",PoductSchema);