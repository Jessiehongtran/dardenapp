const db = require('../../data/dbConfig');

function findAll(){
    return db("user_dardie")
            .join("services", "services.service_id", "user_dardie.service_id")
            .select(
                "services.service_name", 
                "user_dardie.*",
                )
}

function getDardieById(id){
    return db("user_dardie")
            .where({dardie_id: id})
            .join("services", "services.service_id", "user_dardie.service_id")
            .select(
                "services.service_name", 
                "user_dardie.*",
                )
}

function getDardiesByServiceId(id){
    return db("services")
            .where({})
}

function addDardie(dardie){
    return db("user_dardie")
            .returning("dardie_id")
            .insert(dardie)
            .then(ids => {return {id: ids[0]}})
}

module.exports = {
    findAll,
    getDardieById,
    getDardiesByServiceId,
    addDardie
}