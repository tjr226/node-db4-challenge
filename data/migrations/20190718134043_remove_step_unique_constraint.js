
exports.up = function(knex) {
  return knex.schema.table('steps', tbl => {
      tbl.dropUnique('step_number')
  })
};

exports.down = function(knex) {
  return knex.schema.table('steps', tbl => {
      tbl.unique('step_number');
  })
};
