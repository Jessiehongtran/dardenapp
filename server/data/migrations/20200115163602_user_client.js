exports.up = function(knex) {
    return knex.schema.createTable("user_client", column => {
        column.increments();
        column.string('email', 128).unique().notNullable();
        column.string('password').notNullable();
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("user_client");
};