const express = require('express')
//create app object 
const app = express()


//request processing :REST API
app.get('/', (req, res) => {
    //send resonse
    res.end('Home')
})
//api 
app.get('/api/todos', (req, res) => {
    //send resonse
    res.status(200).json({
        message: 'todos get'
    })
})
app.post('/api/todos', (req, res) => {
    //send resonse
    res.status(200).json({
        message: 'todos post'
    })
})
app.delete('/api/todos', (req, res) => {
    //send resonse
    res.status(200).json({
        message: 'todos delete'
    })
})
app.put('/api/todos', (req, res) => {
    //send resonse
    res.status(200).json({
        message: 'todos update'
    })
})

//posts
app.get('/api/posts', (req, res) => {
    //send resonse
    res.status(200).json({
        message: 'posts get'
    })
})
app.post('/api/posts', (req, res) => {
    //send resonse
    res.status(200).json({
        message: 'posts post'
    })
})
app.delete('/api/posts', (req, res) => {
    //send resonse
    res.status(200).json({
        message: 'posts delete'
    })
})
app.put('/api/posts', (req, res) => {
    //send resonse
    res.status(200).json({
        message: 'posts update'
    })
})
//server 
//server server

app.listen(3000, () => {
    console.log('Express is Ready!')
})