const db = require('../../data/dbConfig');

function findAll(){
    return db("user_client")
}

function findBy(filter){
    return db("user_client").where(filter)
}

function getClientById(id){
    return db("user_client")
            .where({id})
            .then(clients => clients[0])
}

function addClient(client){
    return db("user_client")
            .returning("id")
            .insert(client)
            .then(ids => {return {id: ids[0]}})
}


function updateClient(id, change){
    return db("user_client")
            // .where({id})
            .where({id: id})
            .update(change);
}

function removeClient(id){
    return db("user_client")
            .where({id})
            .first()
            .del()
}

module.exports = {
    findAll,
    findBy,
    getClientById,
    updateClient,
    addClient,
    removeClient
}