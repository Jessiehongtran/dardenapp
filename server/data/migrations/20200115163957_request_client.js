
exports.up = function(knex) {
  return knex.schema.createTable("request_client", column => {
      column.increments();
      column
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("user_client")
        .onDelete("RESTRICT")
        .onDelete("RESTRICT")
      column.integer("unit");
      column.integer("hours").notNullable();
      column.string("address").notNullable();
      column.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("request_client")
};
