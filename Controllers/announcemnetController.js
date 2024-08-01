import { Announcement } from "../Models/announcementSchema.js";
import handleValidationError from "../Middlewares/errorHandler.js";

export const createAnnouncement=async (req,res,next)=>{
    console.log(req.body);
    const {announcement}=req.body;
    try {
        if(!announcement){
            return next(new  handleValidationError("Please Provide a announcement !",400));
        }
        await Announcement.create({announcement});
        res.status(200).json({
            success:true,
            message:"Announcement created"
        })
    } catch (error) {
        next(error)
    }
};

export const getAllAnnouncement=async(req,res,next)=>{
    try {
        const announcement=await Announcement.find();
        res.status(200).json({
            success:true,
            announcement
        })
    } catch (error) {
        next(error)
    }
}