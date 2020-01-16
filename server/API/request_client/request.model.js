const db = require('../../data/dbConfig');


function findAll(){
    return db("request_client");
}

function addRequest(request){
    console.log(request)
    return db('request_client')
            .insert(request)
            .then(ids => ({id: ids[0]}))
}

function getRequestById(id){
    return db("request_client")
            .where({id})
            .then(reqs => reqs[0])
}

function updateRequest(id, change){
    return db("request_client")
            .where({id})
            .update(change);
}


module.exports = {
    findAll,
    addRequest,
    getRequestById,
    updateRequest
}