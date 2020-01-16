const db = require('../../data/dbConfig');


function findAll(){
    return db("services");
}

function findByName(name){
    return db("services")
            .where({service_name: name})
            .then(services => (services[0]))
}


module.exports = {
    findAll,
    findByName
}