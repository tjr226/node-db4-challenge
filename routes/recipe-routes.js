const express = require('express');

// add in DB model

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: "recipe route success"});
});

module.exports = router;