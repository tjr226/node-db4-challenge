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

module.exports = router;