import mongoose from "mongoose"; 
let isConnected = false;

const connectMongoDB = async () => {
    if (isConnected) {
        console.log('Using existing database connection');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        isConnected = true;
        console.log('Database connected');
    } catch (error) {
        console.error('Database connection error:', error);
        throw error;
    }
};

export default connectMongoDB;


// This document creates the connection to Mongo DB using our environment URI which is provided in the .env file