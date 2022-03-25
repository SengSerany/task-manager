const express = require('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found')

// Middleware
app.use(express.json())

const homepage = require('./routes/homepage.js')
const tasks = require('./routes/tasks.js')
const errorHandlerMiddleWare = require('./middleware/error-handler')

// Routes
    // Homepage
    app.use('/', homepage);
    // CRUD Task
    app.use('/api/v1/tasks', tasks);
    // Not found
    app.use(notFound)
    // Error Handler
    app.use(errorHandlerMiddleWare)

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