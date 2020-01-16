const router = require("express").Router();
const Services = require("./services.model");

router.get('/', (req, res) => {
    // try {
    //     const services = Services.findAll();
    //     res.status(200).json(services)
    // } catch (err){
    //     console.log(err.message);
    //     res.status(400).json(err.message);
    // }
    Services.findAll()
            .then(services => {
                res.status(200).json(services)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
})

module.exports = router;