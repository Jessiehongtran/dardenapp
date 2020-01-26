const path = require('path');
const express = require('express');
const cors = require('cors');
const server = express();
const bodyParser = require('body-parser')

const clientRouter = require('./user_client/client.router');
const servicesRouter = require('./services/services.router');
const requestRouter = require('./request_client/request.router');
const paymentRouter = require('./payment/payment.router');
const dardieRouter = require('./user_dardie/dardie.router');

server.use(express.json());
server.use(bodyParser.json());
server.use(cors());
server.use(express.static(path.join(__dirname, '../build')))
server.use('/api/clients', clientRouter);
server.use('/api/services', servicesRouter);
server.use('/api/requests', requestRouter);
server.use('/api/stripe/charge', paymentRouter);
server.use('/api/dardies', dardieRouter);

server.get('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'))
  })

server.get('/', (req, res) => {
    res.send('Hello World')
})




module.exports = server;