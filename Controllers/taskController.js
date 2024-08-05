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


export  const markDon=async(req,res,next)=>{
  const{id}=req.params;
  try{
    const task =await Task.findById(id);
    if(!task){
      return res.status(404).json({
        success:false,
        message:`Task ${id} not found`
      });
    }
    task.done=true
    await task.save();
    res.json({
      success:true,
      message:`Task ${id} marked Done`
    })
  }catch(err){
    next(err);
  }
}