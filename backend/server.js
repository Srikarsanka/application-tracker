require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const applicationRoutes = require('./routes/applicationRoutes');

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// API Routes
app.use('/api/applications', applicationRoutes);

// Base Route
app.get('/', (req, res) => {
    res.send('Job Application Tracker API is running.');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
