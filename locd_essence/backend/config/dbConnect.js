import mongoose from "mongoose";

const dbConnect = () => {
    if(mongoose.connection.readyState >= 1) {
        return
    }

    mongoose.set("strictQuery", false) //allow querying of data not in schema
    mongoose.connect(process.env.DB_URI) //database connect
}

export default dbConnect