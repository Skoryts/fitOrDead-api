const router = require('express').Router();
const userService = require('../services/user');

router.get('/goal/:userId', (req, res) => {
  const goal = userService.getGoal(req.params.userId);
  res.send(goal)
});

router.post('/goal', (req, res) => {
  userService.updateGoal();
  res.send('User goal updated')
});

router.get('/history', (req, res) => {
  res.send('User history')
});

router.post('/history', (req, res) => {
  res.send('User history updated')
});

module.exports = router;