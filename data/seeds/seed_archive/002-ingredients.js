
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'beans', recipe_id: '1', amount: '2'},
        {id: 2, ingredient_name: 'beans', recipe_id: '3', amount: '2'},
        {id: 3, ingredient_name: 'tortilla', recipe_id: '1', amount: '1'},
        {id: 4, ingredient_name: 'tortilla', recipe_id: '2', amount: '1'},
        {id: 5, ingredient_name: 'shell', recipe_id: '1', amount: '1'},
        {id: 6, ingredient_name: 'enchilada sauce', recipe_id: '2', amount: '1'},
        {id: 7, ingredient_name: 'ground beef', recipe_id: '1', amount: '1'},
        {id: 8, ingredient_name: 'ground beef', recipe_id: '2', amount: '1'},
        {id: 9, ingredient_name: 'ground beef', recipe_id: '3', amount: '1'},
      ]);
    });
};
