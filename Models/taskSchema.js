import mongoose from "mongoose";
import validator from "validator";


const taskSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    grade: {
      type: String,
      required: true
    },
    deadline: {
      type: Date,
      required: true
    },
  });

 export const Task=mongoose.model("Task",taskSchema); 
