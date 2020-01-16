const express = require('express');
const cors = require('cors');
const server = express();

const clientRouter = require('./user_client/client.router');
const servicesRouter = require('./services/services.router');
const requestRouter = require('./request_client/request.router');

server.use(express.json());
server.use(cors());
server.use('/api/clients', clientRouter);
server.use('/api/services', servicesRouter);
server.use('/api/requests', requestRouter);


server.get('/', (req, res) => {
    res.send('Hello World')
})


module.exports = server;