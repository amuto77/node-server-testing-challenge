const server = require('./api/server')


const PORT = 5000

server.listen(PORT,()=>{
    console.log('Running on Port 5000')
})