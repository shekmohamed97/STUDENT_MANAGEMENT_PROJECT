import express from "express";
import { createTask,getAllTask, markDon } from "../Controllers/taskController.js";

const router=express.Router();

router.post("/create",createTask);
router.get("/getall",getAllTask);
router.put("/:id/submit",markDon)

export default router;

