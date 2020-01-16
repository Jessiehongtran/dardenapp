const db = require('../../data/dbConfig');


function findAll(){
    return db("services");
}




module.exports = {
    findAll
}