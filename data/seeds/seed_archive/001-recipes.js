
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'tacos'},
        {id: 2, recipe_name: 'enchiladas'},
        {id: 3, recipe_name: 'burritos'}
      ]);
    });
};
