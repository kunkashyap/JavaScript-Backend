import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

//Configuration
app.use(express.json({
    limit : "15kb",  //limit for JSON

}))

//Data from URL
app.use(express.urlencoded({
    extended: true, // extended means nested objects
    limit : "15kb"
}))

app.use(express.static("public")); //Storing images/pdf/favicon in public folder

//Cookie
app.use(cookieParser());

export { app }