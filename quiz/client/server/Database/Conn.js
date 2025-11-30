import mongoose from 'mongoose';

export default async function connect() {
    const uri = process.env.ATLAS_URI;

    if (!uri) {
        throw new Error("ATLAS_URI is not defined in .env file");
    }

    try {
        await mongoose.connect(uri);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
}