import mongoose from 'mongoose'
import {DB_NAME} from "../constants";


// DB IS IN ANOTHER CONTINENT
const connectDB = asnyc () => {
    try {
      const connectionInstance = await  mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("MONGODB CONNECTION ERROR: ", error);
        process.exit(1); // immediately terminates the running process and returns an exit code of 1 to the operating system,
        // signaling that the program closed due to an error or failure
    }
}



export default connectDB
