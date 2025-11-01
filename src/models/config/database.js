
const { Sequelize } = require('sequelize');

const conexao = new Sequelize('dbpetday', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = conexao; // exporta a instância do Sequelize
