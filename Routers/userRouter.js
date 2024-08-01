import express from "express";
import { studentSignIn,teacherSignIn } from "../Controllers/userController.js";

const router = express.Router();

router.post('/student/signin', studentSignIn);
router.post('/teacher/signin', teacherSignIn);

export default router;