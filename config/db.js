import mongoose from 'mongoose';
const connectionURI = process.env.DB_CONNECTION_URI;

const connectToDatabase = async () => {
    try {
        await mongoose.connect(connectionURI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(`Error connecting to the database: ${error.message}`);
        throw error; // Propagate the error to the caller
    }
};

export default connectToDatabase;
