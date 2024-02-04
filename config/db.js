import mongoose from 'mongoose';
const connectionURI = process.env.DB_CONNECTION_URI;

const connectToDatabase = async () => {
    try {
        await mongoose.connect(connectionURI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('\x1b[1m\x1b[31m%s\x1b[0m',`Error connecting to the database:${error}`);
    }
};

export default connectToDatabase;
