const Sequelize = require('sequelize')
const conexao = new Sequelize('dbpetday', 'root', 'escola', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

conexao.authenticate()  // verifica a conexão com o banco
    .then(() =>{
        console.log('Conexão com o banco de dados feita com sucesso.');
        return conexao.sync();
    })
    .catch(err =>{
        console.error('Erro ao tentar conectar com o banco de dados')
    });


module.export = conexao;