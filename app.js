const express = require('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();

// Middleware
app.use(express.json())

const homepage = require('./routes/homepage.js')
const tasks = require('./routes/tasks.js')

// Routes
    // Homepage
    app.use('/', homepage);
    // Index ('/api/v1/tasks')
    // New + Create ('/api/v1/tasks')
    // Show ('/api/v1/tasks/:id')
    app.use('/api/v1/tasks', tasks);
    // Edit + Update ('/api/v1/tasks/:id')
    // Delete ('/api/v1/tasks/:id')

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`-> Server is online on port ${port}!`));
    } catch (error) {
        console.log(error);
    }
};

start();