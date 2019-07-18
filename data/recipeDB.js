const db = require('./db-config.js');

module.exports = {
    findRecipes,
    getShoppingList,
    getInstructions
}

function findRecipes() {
    return db('recipes');
}

function getShoppingList(id) {
    return db('ingredients')
        .where({ recipe_id: id});
}

function getInstructions(id) {
    return db('steps')
        .where({ recipe_id: id})
        .orderBy('step_number');
}