const express = require('express');

const db = require('../data/recipeDB.js');

const router = express.Router();


router.get('/', (req, res) => {
    db.getIngredients()
        .then(ingredients => {
            res.status(200).json(ingredients);
        })     
        .catch(error => {
            res.status(500).json(error);
        })
});

// router.get('/:id/recipes', (req, res) => {
//     const id = req.params.id;
//     db.getRecipeByIngredient(id)
//     .then(recipes => {
//         if (recipes) {
//             res.status(200).json(recipes)
//         } else {
//             res.status(404).json({ message: "not found" });
//         }
//     })
//     .catch(error => {
//         res.status(500).json(error);
//     })
// })

module.exports = router;