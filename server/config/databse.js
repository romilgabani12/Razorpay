import mongoose from "mongoose";

export const connectDB = async ()=>{
    const {connection} = await mongoose.connect(process.env.MONGO_URI,{
        dbName: "Razoepay",
    });
    console.log(`MongoDb is connected with ${connection.host}`);
}