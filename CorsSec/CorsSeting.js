import app from "../app.js";
import cors from "cors";

app.use(cors({
    origin: [
               "http://localhost:5173",//
               "https://elegant-paletas-e1b8b5.netlify.app",
               "https://student-management-project.onrender.com"
             ],////////////
             methods: ["GET", "POST", "DELETE", "PUT"],
             credentials: true,
}))