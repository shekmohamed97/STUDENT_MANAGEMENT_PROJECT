import express from "express";
import { adminRegister } from "../Controllers/adminRegisterController.js";
import { adminSignIn } from "../Controllers/userController.js";

const router=express.Router();

router.post("/register",adminRegister);
router.post("/signin",adminSignIn);


export default router