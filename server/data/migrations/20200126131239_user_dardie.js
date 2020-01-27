
exports.up = function(knex) {
    return knex.schema.createTable("user_dardie", column => {
        column.increments("dardie_id");
        column
            .integer("service_id")
            .unsigned()
            .references("service_id")
            .inTable("services")
            .onDelete("RESTRICT")
            .onDelete("RESTRICT")
        column.string('role', 128).notNullable();
        column.string('name', 128).notNullable();
        column.string('email').notNullable();
        column.string('phoneNumber').notNullable();
        column.string('address').notNullable();
        column.float("latitude").notNullable();
        column.float("longitude").notNullable();
        column.timestamp('created_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("user_dardie");
};
