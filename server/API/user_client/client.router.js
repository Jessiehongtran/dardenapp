const router = require("express").Router();
const Clients = require("./client.model")

// GET clients
router.get('/', (req, res) => {
    Clients.findAll()
            .then(clients => {
                res.status(200).json(clients)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
})


// GET a client by id
router.get('/:id', (req, res) => {
    const {id} = req.params
    Clients.getClientById(id)
            .then(client => {
                res.status(200).json(client)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
})


// POST a client
router.post('/', (req, res) => {
    const client = req.body
    Clients.addClient(client)
            .then(id => {
                res.status(200).json(id)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
})

// PATCH update a client
router.patch('/:id', (req, res) => {
    const change = req.body;
    const {id} = req.params;
    Clients.getClientById(id)
            .then (client => {
                if (client){
                    Clients.updateClient(id, change)
                    .then(count => {
                        res.status(200).json({message: `updated ${count} request`})
                    })
                    .catch(err => res.status(500).json(err.message))
                } else {
                    res.status(500).json({message: "request does not exist"})
                }
                
            })
            .catch(err => res.status(500).json(err.message))

})


module.exports = router;