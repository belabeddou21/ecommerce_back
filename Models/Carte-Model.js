import mongoose from 'mongoose';

const Schema =mongoose.Schema;
const carteSchema = new Schema({
    userId : { type : String, required : true},
    products : [
           {
            productId :{
                type : String,
            },
            quantity : {
                type : Number,
                default : 1,
            },
           },  
    ],

},
           {timestamps: true}
);
export default mongoose.model("Carte",carteSchema);