import mongoose from 'mongoose';

let connection = null;

export default async function dbConnection(uri, options = {}) {
    if (connection) return connection; // reuse existing connection

    try {
        await mongoose.connect(uri, options);
        connection = mongoose.connection;
        console.log('MongoDB connected');
        return connection;
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        throw error; // let caller handle
    }
}
