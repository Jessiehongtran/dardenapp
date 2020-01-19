const db = require('../../data/dbConfig');


function findAll(){
    return db("request_client");
}

function addRequest(request){
    console.log(request)
    return db('request_client')
            .returning("id")
            .insert(request)
            .then(ids => {return {id: ids[0]}})
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