//require('dotenv').config({path:'./env'});
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

import dotenv from 'dotenv'
import mongoose from 'mongoose'
import {DB_NAME} from './constants.js'
import express from 'express'
import connectDB from "./db/db.js";

const app = express()
//While connecting database always use async / try-catch

//                      APPROACH 1

dotenv.config({
    path : 'Backend/.env'
});


connectDB()
    .then(()=>{
        app.listen(process.env.PORT || 8000 , ()=> {
            console.log(`Server running on port ${process.env.PORT || 8000}`);
        })
    })

    .catch((err) => {
        console.log("MONGODB CONNECTION FAILED!!",err)
    });

/*                          APPROACH 2
//iffe
;(async ()=> {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=> {
            console.log("ERROR:",error)
        })

        app.listen(process.env.PORT, () => {
            console.log(`APP IS LISTENING ON ${process.env.PORT}`)
        })

    } catch (error) {
    console.log("ERROR", error)
    }
}) ()

 */