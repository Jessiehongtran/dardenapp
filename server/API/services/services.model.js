const db = require('../../data/dbConfig');


function findAll(){
    return db("services");
}

function findByName(name){
    return db("services")
            .where({service_name: name})
            .then(services => (services[0]))
}

function getServiceById(id){
    return db("services")
            .where({id: id})
            .then(services => services[0])
}

function addService(service){
    return db("services")
            .insert(service)
            .then(ids => ({id: ids[0]}))
}

function removeService(id){
    return db("services")
            .where({id})
            .first()
            .del()
}

module.exports = {
    findAll,
    findByName,
    getServiceById,
    addService,
    removeService
}