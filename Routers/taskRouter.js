import express from "express";
import { createTask,getAllTask } from "../Controllers/taskController.js";

const router=express.Router();

router.post("/create",createTask);
router.get("/getall",getAllTask);

export default router;

