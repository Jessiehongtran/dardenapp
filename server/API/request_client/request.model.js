const db = require('../../data/dbConfig');


function findAll(){
    return db("request_client")
            .join("services", "services.id", "request_client.service_id")
            .join("user_client", "user_client.id", "request_client.user_id")
            .select(
                "user_client.email", 
                "services.service_name", 
                "request_client.unit",
                "request_client.hours",
                "request_client.address",
                "request_client.created_at"
                )
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
            // .join("services", "services.id", "request_client.service_id")
            // .join("user_client", "user_client.id", "request_client.user_id")
            // .select([
            //     "user_client.email", 
            //     "services.service_name", 
            //     "request_client.unit",
            //     "request_client.hours",
            //     "request_client.address",
            //     "request_client.created_at"
            // ])
            .where("request_client.id", id)
            
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