const express = require('express')
const bodyParser = require('body-parser')

//import router
const todoRouter = require('./routers/todos')
const postsRouter = require('./routers/postos')
const postRouter = require('./routers/postos')
const employeeRouter = require('./routers/employee')

// get driver connection
const dbo = require("./db");


//create app object 
const app = express()

//initalize the middlewares
app.use(bodyParser.json())


//register router with app , so that request to be delegated to the routers
app.use("/api/todos", todoRouter)
app.use('/api/employee', employeeRouter)
app.use("/api/posts", postRouter)

//request processing :REST API
app.get('/', (req, res) => {
    //send resonse
    res.end('Home')
})
//server 
//server server

// app.listen(3000, () => {
//     console.log('Express is Ready!')
// })

app.listen(3000, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
        if (err) console.error(err);

    });
    console.log(`Server is running on port: ${3000}`);
});