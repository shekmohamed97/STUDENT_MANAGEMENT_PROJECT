import express from "express";
import { createTeacher,getAllteachers } from "../Controllers/teacherController.js";

const router=express.Router();

router.post("/create",createTeacher);
router.get("/getall",getAllteachers);

export default router;

