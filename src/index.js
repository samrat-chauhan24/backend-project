// this is the standard approach to connnect db from different file
import connectDB from "./database/db.js";
import 'dotenv/config';
import { app } from "./app.js";

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, (() => {
        console.log("server is listening on port 8000");
    }));
    app.on("error",((err)=>{
        console.log("app is giving this error " + err);
    }));
})  
.catch((err)=>{
    console.log("mongoDB connection failed "+ err);
});

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


