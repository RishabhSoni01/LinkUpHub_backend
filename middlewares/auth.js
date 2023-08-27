const User = require("../models/User");

const jwt = require('jsonwebtoken');

exports.isAuthenticated=async(req,res,next)=>{
    try{
        console.log(req.cookies);
        const token = req.cookies?.substr(6);

        if(!token){
            return res.status(401).json({
                message:"Please login first",
            });
        }
        const decoded = await jwt.verify(token,process.env.JWT_SECRET);
        req.user= await User.findById(decoded._id);

        next();
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
}
