import { Task } from "../Models/taskSchema.js";
import handleValidationError from "../Middlewares/errorHandler.js";

export const createTask = async (req, res, next) => {
    console.log(req.body);
    const { title, description, grade, deadline } = req.body;
    try {
      if (!title || !description || !grade || !deadline) {
        return next(new  handleValidationError("Please Fill Full form !",400));
      }
      await Task.create({ title, description, grade, deadline });
      res.status(201).json({
        success: true,
        message: "Task Created!",
      });
    } catch (err) {
      next(err);
    } 
  };


  export const getAllTask=async(req,res,next)=>{
    try {
        const tasks=await Task.find();
        res.status(200).json({
            success:true,
            tasks
        })
    } catch (error) {
        next(error)
    }
  }

