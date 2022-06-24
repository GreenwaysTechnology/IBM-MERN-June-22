//create router 
const express = require('express');

const postRouter = express.Router()

//posts
postRouter.get('/list', (req, res) => {
    //send resonse
    res.status(200).json({
        message: 'posts get'
    })
})
postRouter.post('/save', (req, res) => {
    //send resonse
    res.status(200).json({
        message: 'posts post'
    })
})
postRouter.delete('/remove', (req, res) => {
    //send resonse
    res.status(200).json({
        message: 'posts delete'
    })
})
postRouter.put('/update', (req, res) => {
    //send resonse
    res.status(200).json({
        message: 'posts update'
    })
})

module.exports = postRouter