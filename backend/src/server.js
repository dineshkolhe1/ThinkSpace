import express from "express";
import dotenv from "dotenv";
import cors from "cors"

import { connectDB } from "./config/db.js";
import nodeRoutes from "./routes/nodeRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//middleware
app.use(cors({
    origin:"http://localhost:5173",
})
);
app.use(express.json());
app.use(rateLimiter);


app.use("/api/notes", nodeRoutes);

connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log("Server is Running on ",PORT);
    });
});
