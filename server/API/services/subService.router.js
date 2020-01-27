const router = require("express").Router();
const SubService = require("./subService.model");

// GET subservices
router.get('/', (req, res) => {
    SubService.findAll()
            .then(subServices => {
                res.status(200).json(subServices)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
})

// GET subservice by id
router.get('/:id', (req, res) => {
    const {id} = req.params
    SubService.getSubServiceById(id)
            .then(service => {
                res.status(200).json(service)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
})


// POST a subservice
router.post('/', (req, res) => {
    const service = req.body;
    SubService.addSubService(service)
            .then(subService => {
                res.status(201).json(subService)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
})

module.exports = router;