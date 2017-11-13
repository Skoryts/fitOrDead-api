const express = require('express');
const app = express();

const userRoutes = require('./routes/user');
const foodRoutes = require('./routes/food');

app.use('/user', userRoutes);
app.use('/food', foodRoutes);
app.get('/', (req, res) => res.send('Hello'));

app.listen(3000, () => console.log('Server listening on port 3000'));