const express = require('express');

const server = express();

const clientRouter = require('./user_client/client.router');
const servicesRouter = require('./services/services.router');
const requestRouter = require('./request_client/request.router');

server.use(express.json());
server.use('/api/client', clientRouter);
server.use('/api/services', servicesRouter);
server.use('/api/request', requestRouter);


server.get('/', (req, res) => {
    res.send('Hello World')
})


module.exports = server;