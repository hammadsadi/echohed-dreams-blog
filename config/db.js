import mongoose from "mongoose";

const connectWithDatabase = async()=>{
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log('DB Connected Successful')
    } catch (error) {
        console.log(error)
    }
}

export default connectWithDatabase