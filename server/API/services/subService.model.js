const db = require('../../data/dbConfig');


function findAll(){
    return db("subService");
}

function getSubServiceById(id){
    return db("subService")
            .where({subService_id: id})
            .then(services => services[0])
}

function addSubService(subService){
    return db("subService")
            .returning("subService_id")
            .insert(subService)
            .then(ids => {return {id: ids[0]}})
}

module.exports = {
    findAll,
    getSubServiceById,
    addSubService
}