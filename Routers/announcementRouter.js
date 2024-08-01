import express from "express";
import { getAllAnnouncement,createAnnouncement } from "../Controllers/announcemnetController.js";

const router =express.Router();

router.get("/getall",getAllAnnouncement);
router.post("/create",createAnnouncement);

export default router