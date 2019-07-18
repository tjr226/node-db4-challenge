const express = require('express');

const db = require('../data/recipeDB.js');

const router = express.Router();

router.get('/', (req, res) => {
    db.findRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(error => {
            res.status(500).json(error);
        })
});

router.get('/:id/shoppinglist', (req, res) => {
    const id = req.params.id;
    // find ingredients using recipe_id
    db.getShoppingList(id)
        .then(recipe => {
            if (recipe) {
                res.status(200).json(recipe);
            } else {
                res.status(404).json({ message: "not found" });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        })
})

router.get('/:id/instructions', (req, res) => {
    const id = req.params.id;
    // find instructions using recipe_id
    db.getInstructions(id)
    .then(recipe_steps => {
        if (recipe_steps) {
            res.status(200).json(recipe_steps);
        } else {
            res.status(404).json({ message: "not found" });
        }
    })
    .catch(error => {
        res.status(500).json(error);
    })
})

module.exports = router;