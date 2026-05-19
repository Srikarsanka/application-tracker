const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/job_tracker');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB Connection Error: ${error.message}`);
        console.error('⚠️ Make sure your MongoDB Atlas Network Access is set to Allow Access From Anywhere (0.0.0.0/0) ⚠️');
        // We are removing process.exit(1) here so the server stays alive even if the DB fails to connect
    }
};

module.exports = connectDB;
