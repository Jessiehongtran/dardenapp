const router = require("express").Router();
const Clients = require("./client.model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../../secrets/secret');

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

// POST to check email for signup
router.post('/checkemail', (req, res) => {
    const {email} = req.body
    Clients.findBy({email})
           .first()
           .then(user => {
               if (user && user.email == email){
                res.status(200).json(user.email)
               } else {
                res.status(401).json({message: 'No such email found'});
               }
           })
           .catch(err => {
            res.status(500).json(err);
            })
})



// POST a client for signup
router.post('/signup', (req, res) => {
    const client = req.body
    const hash = bcrypt.hashSync(client.password, 12)
    client.password = hash
    Clients.addClient(client)
            .then(id => {
                console.log('id check', id)
                res.status(200).json(id)
            })
            .catch(err => {
                res.status(500).json(err.message)
            })
})

// POST a client for login
router.post('/login', (req, res) => {
    let {email, password} = req.body;

    Clients.findBy({email})
           .first()
           .then(user => {
               if (user && bcrypt.compareSync(password, user.password)){
                   const token = generateToken(user);
                   res.status(200).json({
                       message: `Welcome ${user.email}`, 
                       token
                   })
               } else {
                   res.status(401).json({message: 'Invalid Credentials'});
               }
           })
           .catch(err => {
               res.status(500).json(err);
           })
})

function generateToken(user){
    const payload = {
        email: user.email,
    };
    const options = {
        expiresIn: '1d'
    };
    return jwt.sign(payload, secrets.jwtSecret, options)
}



// PATCH update a client
router.patch('/:id', (req, res) => {
    const change = req.body;
    const {id} = req.params;
    Clients.getClientById(id)
            .then (client => {
                if (client){
                    Clients.updateClient(id, change)
                    .then(count => {
                        res.status(200).json({message: `updated ${count} user`})
                    })
                    .catch(err => res.status(500).json(err.message))
                } else {
                    res.status(500).json({message: "user does not exist"})
                }
                
            })
            .catch(err => res.status(500).json(err.message))

})

// DELETE  a client
// router.delete('/:id', (req, res) => {
//     const {id} = req.params;
//     Clients.getClientById(id)
//             .then (client => {
//                 if (client){
//                     Clients.removeClient(id)
//                     .then(count => {
//                         res.status(200).json({message: `deleted ${count} user`})
//                     })
//                     .catch(err => res.status(500).json(err.message))
//                 } else {
//                     res.status(500).json({message: "user does not exist"})
//                 }
                
//             })
//             .catch(err => res.status(500).json(err.message))

// })

module.exports = router;