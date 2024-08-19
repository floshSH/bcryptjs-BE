import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB= async()=>{

    try {
      const connection=await mongoose.connect(process.env.connectionString);
      console.log(`Connected to database ${connection.connection.host}`) ;
      return connection;
    } catch (error) {
        console.log(error)
    }
}
export default connectDB;