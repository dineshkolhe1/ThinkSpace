import mongoose from "mongoose";

export const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DataBase Connect Succesfully");
    } catch (error) {
        console.log("Not Connect to Database",error);
        process.exit(1);
    }
}