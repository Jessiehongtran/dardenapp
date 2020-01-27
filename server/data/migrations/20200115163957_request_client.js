
exports.up = function(knex) {
  return knex.schema.createTable("request_client", column => {
      column.increments("request_id");
      column
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("user_client")
        .onDelete("RESTRICT")
        .onDelete("RESTRICT")
      column
        .integer("service_id")
        .unsigned()
        .references("id")
        .inTable("services")
        .onDelete("RESTRICT")
        .onDelete("RESTRICT")
      column.integer("unit");
      column.float("hours").notNullable();
      column.string("address").notNullable();
      column.float("latitude").notNullable();
      column.float("longitude").notNullable();
      column.float("price").notNullable();
      column.timestamp("created_at").defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("request_client")
};

