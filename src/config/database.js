const Sequelize = require('sequelize')
const conexao = new Sequelize('dbpetday', 'root', 'escola', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.export = conexao;