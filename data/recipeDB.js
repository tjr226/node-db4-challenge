const db = require('./db-config.js');

module.exports = {
    findRecipes,
    findIngredients
}

function findRecipes() {
    return db('recipes');
}

function findIngredients() {
    return db('ingredients');
}