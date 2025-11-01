const conexao = require('./models/config/database');  // puxa a config da conexão com o banco de dados
const bodyparser = require('body-parser');     // traduz java para json
const express = require('express');
const app = express();                         // utilização do express
const routes = require('./routes');
