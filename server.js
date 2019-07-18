const express = require('express');

const RecipeRouter = require('./routes/recipe-routes.js');
const IngredientRouter = require('./routes/ingredient-routes.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipeRouter);
server.use('/api/ingredients', IngredientRouter);

module.exports = server;