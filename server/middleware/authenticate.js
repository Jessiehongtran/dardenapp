const jwt = require('jsonwebtoken');
const secrets = require('../secrets/secret');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token){
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if (err){
                res.status(401).json({message: "You shall not pass!"})
            } else {
                req.user = {email: decodedToken.email}
                next()
            }
        })
    }
    else {
        res.status(400).json({message: "No credentials provided"})
    }
}