//create router 
const express = require('express');

const todoRouter = express.Router()

//api 
todoRouter.get('/list', (req, res) => {
    //send resonse
    res.status(200).json({
        message: 'todos get'
    })
})
todoRouter.post('/save', (req, res) => {
    //read payload / data
    const todo = req.body 
    console.log(todo)
    //send resonse
    res.status(200).json({
        message: 'todos post'
    })
})
todoRouter.delete('/remove', (req, res) => {
    //send resonse
    res.status(200).json({
        message: 'todos delete'
    })
})
todoRouter.put('/update', (req, res) => {
    //send resonse
    res.status(200).json({
        message: 'todos update'
    })
})

module.exports = todoRouter;