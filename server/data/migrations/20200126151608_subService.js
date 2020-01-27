
exports.up = function(knex) {
    return knex.schema.createTable("subService", column => {
        column.increments("subService_id");
        column
            .integer("service_id")
            .unsigned()
            .references("id")
            .inTable("services")
            .onDelete("RESTRICT")
            .onDelete("RESTRICT")
        column.string("subService_name").notNullable();
        column.string("subService_icon")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("subService");
};



