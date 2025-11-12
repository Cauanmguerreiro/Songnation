import mongoose from 'mongoose';

async function conectaDB() {
    await mongoose.connect(process.env.MONGODB_URI)
    return mongoose.connection;
}
export  default conectaDB;