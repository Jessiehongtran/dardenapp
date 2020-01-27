const router = require("express").Router();
const Dardies = require('./dardie.model');

// GET all Dardies
router.get('/', (req, res) => {
    Dardies.findAll()
            .then(dardies => {
                res.status(200).json(dardies)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
})

// GET a dardie by id
router.get('/:id', (req, res) => {
    const {id} = req.params
    Dardies.getDardieById(id)
            .then(dardie => {
                res.status(200).json(dardie)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
})

// GET dardies by serviceId
router.get('/serviceId/:id', (req, res) => {
    const {id} = req.params
    Dardies.getDardiesByServiceId(id)
            .then(dardies => {
                res.status(200).json(dardies)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
})


// POST a dardie
router.post('/', (req, res) => {
    const dardie = req.body
    Dardies.addDardie(dardie)
            .then(id => {
                console.log('id check', id)
                res.status(200).json(id)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
})

module.exports = router;