import User from '../Models/User-Model.js';
import CryptoJS  from 'crypto-js';

// updtae methode
export const modifyUser=async(req,res)=>{
   if(req.body.password){
    req.body.password=CryptoJS.AES.encrypt(
        req.body.password,process.env.PASS_SEC
    ).toString();
   }
   try {
    const upadatedUser=await User.findByIdAndUpdate(
        req.params.id,{
            $set : req.body
        },{new : true}
    )
    res.status(200).json(upadatedUser);
   } catch (error) {
    return res.status(500).json(err);
   }
}
// delete methode 
export const deleteUser=async(req,res)=>{
    try { 
       let  existingUser = await User.findById(req.params.id);
        if(!existingUser){
            return res.status(404).json({message :"user does not existe"});
        }
       await User.findByIdAndDelete(req.params.id);
        return res.status(200).json({message : "user has been deleted"});
    } catch (error) {
        return console.log(error);
    }
}
// get user methode
export const getUser=async(req,res)=>{
    try {
     let existingUser=  await User.findById(req.params.id);
      if(existingUser){
        const userData = Object.assign({}, existingUser._doc);
        delete userData.password;
        return res.status(200).json({userData});
      } 
      return res.status(404).json({message : "user do not existe"});
    } catch (error) {
        return console.log(error);
    }
}
   // get all users
export const getAllUser=async(req,res)=>{
      const query=req.query.new;
    try {
     let existingUsers= query ? await User.find().sort({_id : -1}).limit(5) : await User.find();
      if(existingUsers){
        return res.status(200).json({existingUsers});
      } 
      return res.status(404).json({message : "users do not existe"});
    } catch (error) {
        return console.log(error);
    }
}
// get user stat
export const userStat=async(req,res)=>{
    const date= new Date();
    const lastYear=new Date(date.setFullYear(date.getFullYear()-1));
    console.log("year equal to :",lastYear);
    try {
        const data=await User.aggregate([
        {  $match :   {createdAt : {$gte : lastYear}}},
        {  $project : {range : { $month : "$createdAt"},},},
        {  $group :   {_id : "$range",total : {$sum :1},},},
        ]);
    return  res.status(200).json(data);
    } catch (error) {
       return res.status(500).json(error); 
    }
}