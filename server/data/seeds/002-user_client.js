
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_client').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user_client').insert([
        {id: 1, email: 'darden@email.com', password: 'test'},
        
      ]);
    });
};
