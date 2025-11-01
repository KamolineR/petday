const express = require('express');
const app = express();                         // utilização do express
require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//rotas


module.exports = app;