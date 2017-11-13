const router = require('express').Router();

router.get('/goal', (req, res) => {
    res.send('User goal')
});

router.post('/goal', (req, res) => {
    res.send('User goal updated')
});

router.get('/history', (req, res) => {
    res.send('User history')
});

router.post('/history', (req, res) => {
    res.send('User history updated')
});

module.exports = router;