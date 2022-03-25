const express = require('express');
const router = express.Router()

const { getTask, createTask, updateTask, deleteTask } = require('../controllers/tasks');

router.get('/:id', getTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);
router.post('/', createTask);

module.exports = router;