const router = require('express').Router();

router.get('/search', (req, res) => {
    res.json(['meat', 'apple', 'potato'])
});

router.post('/new', (req, res) => {
    res.send('Food added')
});

module.exports = router;