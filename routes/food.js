const router = require('express').Router();

router.get('/search', (req, res) => {
    res.send('List of food')
});

router.post('/new', (req, res) => {
    res.send('Food added')
});

module.exports = router;