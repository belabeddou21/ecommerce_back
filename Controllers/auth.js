import User from '../Models/User-Model.js';
import CryptoJS  from 'crypto-js';
import jwt from 'jsonwebtoken';

export const signup = async(req,res)=>{
    const {username,email,password}=req.body;
    let existingUser;
    try {
        existingUser=await User.findOne({email : email});
    } catch (error) {
        return console.log(error);
    }
    if(existingUser){
        return res.status(401).json({message : "user already exisits"});
    }
    const hashedPassword = CryptoJS.AES.encrypt(password,process.env.PASS_SEC);
    const user = new User({
        username,
        email,
        password : hashedPassword
    });
    try {
      await  user.save();
    } catch (error) {
        return console.log(error);
    }
    return res.status(200).json({message : " user has been created successfully "});

}
export const login = async(req,res)=>{
   const {username,password}=req.body;   
   let existingUser;
   try {
      existingUser = await User.findOne({username});
   } catch (error) {
    return console.log(error);
   }
   if(!existingUser){
   return  res.status(400).json({message :"username does not existe"});
   }
   const HashedPassword = CryptoJS.AES.decrypt(
    existingUser.password,
    process.env.PASS_SEC
    );
    const OriginalPassword = HashedPassword.toString(CryptoJS.enc.Utf8);;
    if(OriginalPassword!==password){
    return   res.status(401).json({message :"password invalid"});  
    }
    const accessToken = jwt.sign({
        id :existingUser._id,isAdmin:existingUser.isAdmin},
        process.env.PASS_SEC,{expiresIn:"1d"}
    );
    // exclude the password field
    const userData = Object.assign({}, existingUser._doc);
    delete userData.password;
    return res.status(200).json({userData,accessToken});
   
}
// put request 
