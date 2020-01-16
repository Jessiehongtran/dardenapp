
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('request_client').del()
    .then(function () {
      // Inserts seed entries
      return knex('request_client').insert([
        {
          id: 1,
          user_id: 1,
          service_id: 1,
          unit: 233,
          hours: 3,
          address: '1001 Blossom River Way, San Jose, CA'
        }
      ]);
    });
};
