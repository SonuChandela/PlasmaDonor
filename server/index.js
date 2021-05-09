const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./router/user.js');
const { urlencoded } = require('body-parser');

require('dotenv').config();
// console.log(require('dotenv').config());

const app = express();

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded());

app.use('/user', router);

mongoose
  .connect(process.env.CONNECTION_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Connected DB ' + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
