//require('dotenv').config({path:'./env'});
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import {DB_NAME} from './constants.js'
import express from 'express'
import connectDB from "./db/db";

const app = express()
//While connecting database always use async / try-catch

//                      APPROACH 1

dotenv.config({
    path : './env'
});


connectDB()


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