const db = require('../../data/dbConfig');


function findAll(){
    return db("request_client")
            .join("services", "services.id", "request_client.service_id")
            .join("user_client", "user_client.id", "request_client.user_id")
            .select(
                "user_client.email", 
                "services.*", 
                "request_client.unit",
                "request_client.hours",
                "request_client.address",
                "request_client.latitude",
                "request_client.longitude",
                "request_client.price",
                "request_client.created_at"
                )
}

function addRequest(request){
    return db('request_client')
            .returning("request_id")
            .insert(request)
            .then(ids => {return {id: ids[0]}})
}

function getRequestById(id){
    return db("request_client")
            .where(id)
            .join("services", "services.id", "request_client.service_id")
            .join("user_client", "user_client.id", "request_client.user_id")
            .select(
                "user_client.email", 
                "services.*", 
                "request_client.unit",
                "request_client.hours",
                "request_client.address",
                "request_client.latitude",
                "request_client.longitude",
                "request_client.price",
                "request_client.created_at"
            )
             
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