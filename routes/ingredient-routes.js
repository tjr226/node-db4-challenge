const express = require('express');

const db = require('../data/recipeDB.js');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: "ingredient route success"});
});

module.exports = router;