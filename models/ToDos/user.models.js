import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        username:{
            type : String,
            required : true,
            unique : true, //Username should be unique
            lowercase : true, //Username should be in lowercases
        },
        email: {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
        },

        password : {
            type : String,
            required : [true, "Password is required"] //custom messages
        },

        isActive : Boolean
    } , {timestamps: true} //created at  & updated at
)

export const User = mongoose.model("User", userSchema)
// Kya model banau ? , kis ke base pe model banau ?

// Database me model "User" -> users ke name se save hoga (plural + lowercase)

