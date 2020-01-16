const router = require("express").Router();
const Services = require("./services.model");

// GET services
router.get('/', (req, res) => {
    Services.findAll()
            .then(services => {
                res.status(200).json(services)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
})

// POST a service
router.post('/', (req, res) => {
    const service = req.body;
    Services.addService(service)
            .then(service => {
                res.status(201).json(service)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
})

// POST to find service by name
router.post('/find', (req,res) => {
    let serviceName = req.body.serviceName
    console.log(serviceName)
    Services.findByName(serviceName)
            .then(service => {
                if (service.service_name == serviceName){
                    res.status(200).json(service)
                } else {
                    res.status(404).json({message: "Not found"})
                }
            })
            .catch(err => {
                res.status(500).json(err)
            })
})

// DELETE a service
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    Services.getClientById(id)
            .then (client => {
                if (client){
                    Services.removeService(id)
                    .then(count => {
                        res.status(200).json({message: `deleted ${count} service`})
                    })
                    .catch(err => res.status(500).json(err.message))
                } else {
                    res.status(500).json({message: "service does not exist"})
                }
                
            })
            .catch(err => res.status(500).json(err.message))

})



module.exports = router;