import jwt from 'jsonwebtoken';


export const verifyToken=(req,res,next)=>{
    const authHeader=req.headers.token;
    if(authHeader){
     const token = authHeader.split(" ")[1];
     jwt.verify(token,process.env.PASS_SEC,(err,data)=>{
       if(err){
        return res.status(403).json("token is not valid");
       }
//create new req which is req.user and put the data inside it 
      req.user = data;
      next();
     })
    }else{
        return res.status(401).json("you are not Authenticated");
    }
}

export const verifyTokenAndAuthorization=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(403)
            .json("You are not allowed  to do that");
        }
    });

}

export const verifyTokenAndAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next();
        }else{
            res.status(403)
            .json("You are not allowed  to do that only admins are allowed to get users infromation");
        }
    });
}