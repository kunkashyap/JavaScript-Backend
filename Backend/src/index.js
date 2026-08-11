import mongoose from 'mongoose'
import {DB_NAME} from './constants.js'
import express from 'express'

const app = express()
//While connecting database always use async / try-catch












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