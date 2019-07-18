
exports.up = function (knex) {
    return knex.schema.table('steps', tbl => {
        tbl.string('instructions', 1024)
    })
};

exports.down = function (knex) {
    return knex.schema.table('steps', tbl => {
        tbl.dropColumn('instructions');
    })
};
