const http = require('http')
const routes = require('./routes')


const server = http.createServer(routes);

server.listen(3000);

// const fs = require('fs');

// fs.writeFileSync('testWriteFile', ' some messgae to test writet')