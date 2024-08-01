import  handleValidationError from "../Middlewares/errorHandler.js";
import { Admin } from "../Models/adminRegisterSchema.js";
import { Student } from "../Models/studentSchema.js";
import { Teacher } from "../Models/userSchema.js";

export const adminSignIn =async (req,res,next)=>{
    const {email,password}=req.body;
    try {
        if(!email||! password){
            return next(new  handleValidationError("Please Fill Full form !",400));
        }
        const existingAdmin = await Admin.findOne({email});

        if(!existingAdmin){
            return res.status(401).json({success:false,message:"invalid email  "});
        }

        const isPasswordValid = await existingAdmin.isValidpassword(password);

        if(!isPasswordValid){
            return res.status(401).json({success:false,message:"invalid  password"});
        }

        res.status(200).json({
            success:true,
            message:"Admin signed in successfully !"
        })
    } catch (error) {
        next(error)
    }
};

export const studentSignIn=async (req,res,next)=>{
    const{email,password}=req.body;
    try {
        if(!email||!password){
            return next(new  handleValidationError("Please Fill Full form !",400));
        }
        res.status(200).json({
            success:true,
            message:"Student signed in successfully !"
        });
    } catch (error) {
        next(error)
    }
}


export const teacherSignIn=async (req,res,next)=>{
    const{email,password}=req.body;
    try {
        if(!email||!password){
            return next(new  handleValidationError("Please Fill Full form !",400));
        }
        res.status(200).json({
            success:true,
            message:"Teacher signed in successfully !"
        });
    } catch (error) {
        next(error)
    }
}

