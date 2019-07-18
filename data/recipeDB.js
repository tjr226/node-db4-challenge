const db = require('./db-config.js');

module.exports = {
    findRecipes,
    getShoppingList
}

function findRecipes() {
    return db('recipes');
}

function getShoppingList(id) {
    return db('ingredients')
        .where({ recipe_id: id});
}