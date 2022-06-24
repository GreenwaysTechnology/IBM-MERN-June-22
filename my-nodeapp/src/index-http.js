const http = require('http')

//create server
//requestListener is callback function , it is called only when request event and response event is trigger
const requestListener = (req, res) => {
    //process client request and send response
    res.end('Hello')
}
const server = http.createServer(requestListener)


//start the server 
server.listen(3000, () => {
    console.log('Server is ready')
})