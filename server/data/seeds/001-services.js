
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('services').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('services').insert([
        {id: 1, service_name: 'Cleaning'},
        {id: 2, service_name: 'Hair Cut'},
        {id: 3, service_name: 'Personal Trainer'},
        {id: 4, service_name: 'Moving Buddy'},
        {id: 5, service_name: 'Laundry'},
        {id: 6, service_name: 'Pet Sitting/Walking'}
      ]);
    });
};
