
import express from 'express';
import cors from 'cors';
import userRoutes from './Routers/user.router.js';
import urlRoutes from './Routers/url.router.js';
import dotenv from 'dotenv';
import connectDB from './Database/dbConfig.js';

dotenv.config();

const app=express();
app.use(express.json());
app.use(cors());

app.get("/", (req,res)=>{
    res.status(200).send("App is running")
})
app.use("/user", userRoutes);
app.use("/url", urlRoutes);
connectDB();
app.listen(process.env.port,()=>
    console.log(`App is running on port ${process.env.port}`)
)