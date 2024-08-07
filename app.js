import express from "express";
import { config } from "dotenv";
// import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import adminRegisterRouter from "./Routers/adminRegisterRouter.js"
import announcementRouter from "./Routers/announcementRouter.js";
import classRouter from "./Routers/classRouter.js";
import studentRouter from "./Routers/studentRouter.js";
import usersRouter from "./Routers/userRouter.js";
import taskRouter from "./Routers/taskRouter.js";
import teacherRouter from "./Routers/teacherRouter.js";
import corsSet from "cors";

const app=express();

config({path:"./Config/.env"});



// CORS configuration
// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "https://elegant-paletas-e1b8b5.netlify.app",
//       "https://student-management-project.onrender.com"
//     ],////////////
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true,
//   })
// );
    app.use(corsSet({
      origin:[
        "http://localhost:5173",//
        "https://elegant-paletas-e1b8b5.netlify.app",
        "https://student-management-project.onrender.com"
      ],
      methods: ["GET", "POST", "PUT", "DELETE"], 
      credentials:true
    }))
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api/v1.1/admin",adminRegisterRouter);
app.use("/api/v1.1/announcement",announcementRouter);
app.use("/api/v1.1/class",classRouter);
app.use("/api/v1.1/student",studentRouter);
app.use("/api/v1.1/users",usersRouter);
app.use("/api/v1.1/task",taskRouter);
app.use("/api/v1.1/teacher",teacherRouter);


dbConnection();

export default app;