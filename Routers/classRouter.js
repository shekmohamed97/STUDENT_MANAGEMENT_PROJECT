import express from "express";
import { getAllClass,createClass } from "../Controllers/classController.js";

const router=express.Router();

router.get("/getall",getAllClass);
router.post("/create",createClass);

export default router
