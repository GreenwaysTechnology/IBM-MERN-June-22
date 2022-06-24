const http = require('http')
const { findAll } = require('./services/todoservice')

const server = http.createServer(async (req, res) => {
    try {
        const todos = await findAll()
        //send json 
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify(todos))
    }
    catch (err) {
        res.end(JSON.stringify(err))
    }
})

//start the server 
server.listen(3000, () => {
    console.log('Server is ready')
})