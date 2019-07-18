const db = require('./db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getIngredients,
    // getRecipeByIngredient
}

function getRecipes() {
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

function getIngredients() {
    return db('ingredients')
    // .distinct('ingredient_name');
}

// function getIngredient(id) {
//     return db('ingredients')
//         .where({ id: id }).first()
// }

// function getRecipeByIngredient(id) {
    // const ingredient = getIngredient(id);
    // return ingredient;
    // return db('ingredients')
        // .where({ recipe_id: ingredient.recipe_id})
        // .distinct('ingredient_name');
// }