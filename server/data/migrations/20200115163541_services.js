
exports.up = function(knex) {
  return knex.schema.createTable("services", column => {
    column.increments("id");
    column.string("service_name").notNullable();
    column.string("service_icon")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("services");
};
