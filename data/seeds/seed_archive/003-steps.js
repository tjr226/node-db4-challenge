
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, recipe_id: '1', step_number: '1', instructions: 'prep shell'},
        {id: 2, recipe_id: '1', step_number: '2', instructions: 'put beans and meat in shell'},
        {id: 3, recipe_id: '2', step_number: '1', instructions: 'prep tortilla'},
        {id: 4, recipe_id: '2', step_number: '2', instructions: 'put beans and meat in tortilla'},
        {id: 5, recipe_id: '2', step_number: '3', instructions: 'pour sauce over enchilada'},
        {id: 6, recipe_id: '3', step_number: '1', instructions: 'put beans and meat in tortilla'},
        {id: 7, recipe_id: '3', step_number: '2', instructions: 'fold tortilla'}
      ]);
    });
};
