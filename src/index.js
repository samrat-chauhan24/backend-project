// this is the standard approach to connnect db from different file
import connectDB from "./database/db.js";
import 'dotenv/config';

connectDB()

// this is one approach to connect db in the index file only
/*
import express from 'express';
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("error : ", error); 
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log("app is listening on port 8000");
        })
    } catch (error) {
        console.error("error : ", error);
        throw error;
    }
})()
*/


