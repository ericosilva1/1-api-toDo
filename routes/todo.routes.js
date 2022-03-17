const { Router } = require('express');

const Todo = require('../models/Todo');

const router = Router();



router.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});




router.post('/todos', async (req, res) => {
    try{
        const newTodo = await Todo.create(req.body);
        res.status(200).json(newTodo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});




router.put('/todos/:id', async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    try{
        const updatedTodo = await Todo.findOneAndUpdate({_id: id }, payload, { new: true });
        res.status(200).json(updatedTodo)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});




router.delete('/todos/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await Todo.findByIdAndDelete(id);
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});





module.exports = router;