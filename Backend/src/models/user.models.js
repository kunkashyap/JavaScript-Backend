import mongoose , {Schema}  from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true, // trim -automatically removes all leading and trailing whitespace from a string before saving it to MongoDB
        index: true, //optimising search
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true, // trim -automatically removes all leading and trailing whitespace from a string before saving it to MongoDB
    },
    fullname: {
        type: String,
        required: true,
        trim: true, // trim -automatically removes all leading and trailing whitespace from a string before saving it to MongoDB
        index: true, //optimising search
    },
    avatar : {
        type: String, //cloudinary URL
        required: true,
    },
    coverImage : {
        type: String ////cloudinary URL
    },

    watchHistory : [
        {
            type: Schema.Types.ObjectId,
            ref : "Video"
        }
    ],
    password : {
        type : String,
        required: [true , "Password is required"],
    },
    refreshToken : {
        type : String,
    },

}, {
    timestamps: true
})



export const User = mongoose.model("User", userSchema)