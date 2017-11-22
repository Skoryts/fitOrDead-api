const express = require('express');
const app = express();
const helmet = require('helmet');
const compression = require('compression');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');
const foodRoutes = require('./routes/food');

app.use(compression());
app.use(helmet());
app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/food', foodRoutes);

// app.use((err, req, res) => {
//    res.status(500);
//    res.end(err)
// });

app.listen(3000, () => console.log('Server listening on port 3000'));