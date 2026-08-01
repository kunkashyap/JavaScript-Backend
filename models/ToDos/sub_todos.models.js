import mongoose from "mongoose"

const userSchema = new mongoose.Schema({})

export const User = mongoose.model("User", userSchema)
// Kya model banau ? , kis ke base pe model banau ?