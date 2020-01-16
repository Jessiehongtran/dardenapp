const router = require("express").Router();
const Requests = require("./request.model");

router.get('/', (req, res) => {
    Requests.findAll()
            .then(services => {
                res.status(200).json(services)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
})

router.post('/', (req, res) => {
    const request = req.body;
    Requests.addRequest(request)
            .then(request => {
                res.status(201).json(request)
            }
            )
            .catch(err => {
                res.status(500).json(err.message)
            })
    
} )

module.exports = router;