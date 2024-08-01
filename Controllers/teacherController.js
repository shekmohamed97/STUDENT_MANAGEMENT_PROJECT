import { Teacher } from "../Models/teacherSchema.js";
import handleValidationError from "../Middlewares/errorHandler.js";

export const createTeacher=async(req,res,next)=>{
    console.log(req.body);
    const{name,email,subject}=req.body;
    try {
        if (!name || !email || !subject ) {
            return next(new  handleValidationError("Please Fill Full form !",400));
   }
   await Teacher.create({ name, email, subject });
   res.status(200).json({
     success: true,
     message: "Teacher Created!",
   }); 
   } catch (err) {
     next(err)
   }
};

export const getAllteachers=async(req,res,next)=>{
    try {
        const teachers=await Teacher.find();
        res.status(200).json({
            success:true,
            teachers
        })
    } catch (error) {
        next(error)
    }
}
