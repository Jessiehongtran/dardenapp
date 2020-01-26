
exports.up = function(knex) {
    return knex.schema.createTable("user_dardie", column => {
        column.increments("dardie_id");
        column
            .integer("service_id")
            .unsigned()
            .references("id")
            .inTable("services")
            .onDelete("RESTRICT")
            .onDelete("RESTRICT")
        column.string('role', 128).notNullable();
        column.string('name', 128).notNullable();
        column.string('email').notNullable();
        column.string('phoneNumber').notNullable();
        column.string('address').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("user_dardie");
};
