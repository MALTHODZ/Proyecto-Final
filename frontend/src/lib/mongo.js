import mongoose from 'mongoose';

let mongodbConnection;

export async function dbConnect() {
    try{
        if (!mongodbConnection) {
            const conn = await mongoose.connect(String(process.env.MONGO_DB_CONNECTION_STRING));
            mongodbConnection = conn;
        }
    } catch(error){
        console.log('error dbConnect')
        throw new Error(error);
    }
}