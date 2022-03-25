const Task = require("../models/Task")
const asyncWrapper = require('../middleware/async')

// GET Homepage
const getHomepage = asyncWrapper(async (req, res) => {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
});

module.exports = getHomepage;