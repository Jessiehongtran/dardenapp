const router = require("express").Router();
const Requests = require("./request.model");

// GET requests
router.get('/', (req, res) => {
    Requests.findAll()
            .then(services => {
                res.status(200).json(services)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
})

// POST a request
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

// PATCH update a request
router.patch('/:id', (req, res) => {
    const change = req.body;
    const {id} = req.params;
    Requests.getRequestById(id)
            .then (request => {
                if (request){
                    Requests.updateRequest(id, change)
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