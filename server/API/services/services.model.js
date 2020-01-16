const db = require('../../data/dbConfig');


function findAll(){
    return db("services");
}

function findByName(name){
    return db("services")
            .where({service_name: name})
            .then(services => (services[0]))
}

function addService(service){
    return db("services")
            .insert(service)
            .then(ids => ({id: ids[0]}))
}

module.exports = {
    findAll,
    findByName,
    addService
}