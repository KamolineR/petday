const conexao = require('./config/database')
const bodyparser = require('body-parser')

conexao.authenticate()  // conexão com o banco
    .then(() =>{
        console.log('Conexão com o banco de dados feita com sucesso.');
        return conexao.sync();
    })
    .catch(err =>{
        console.error('Erro ao tentar conectar com o banco de dados')
    });



