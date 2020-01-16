
exports.up = function(knex) {
  return knex.schema.createTable("services", column => {
    column.increments();
    column.string("service_name").notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("services");
};
