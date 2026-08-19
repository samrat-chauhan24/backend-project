import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express()

// knowing this much of cors is enough
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))

// these are some confgis that are good practices 
app.use(express.json({limit: "16KB"}))
app.use(express.urlencoded({extended: true, limit: "16KB"}))
app.use(express.static("public"))

// cookie parser
app.use(cookieParser())

// middlewares are the logics used between request and response to check some condition before sending the response
// app.get('/',(req, res) => {} ), but we also have (err, req, res, next)

//routes
import userRouter from './routes/user.routes.js';

//routes declaration
app.use("/api/v1/users", userRouter)

// http://localhost:8000/api/v1/users/register

export { app }  