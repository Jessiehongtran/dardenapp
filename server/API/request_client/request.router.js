const router = require("express").Router();
const Requests = require("./request.model");

// GET requests
router.get('/', (req, res) => {
    Requests.findAll()
            .then(requests => {
                console.log('all', requests)
                res.status(200).json(requests)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
})

// GET request by id
router.get('/:id', (req, res) => {
    const {id} = req.params
    Requests.getRequestById({request_id: id})
            .then(response => {
                console.log('response in getRequestById', response)
                res.status(200).json(response)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
})


// POST a request
router.post('/', (req, res) => {
    const request = req.body;
    Requests.addRequest(request)
            .then(response => {
                console.log('request', response)
                res.status(201).json(response)
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