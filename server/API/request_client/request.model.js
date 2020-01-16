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



module.exports = {
    findAll,
    addRequest
}