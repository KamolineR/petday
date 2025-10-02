const express = require('express')
const conexao = require('./config/database')
const bodyparser = require('body-parser')

const app = express() // criação do servidor
app.listen(3000, () => {
    console.log('Servidor rodando');
});

conexao.authenticate()  // conexão com o banco
    .then(() =>{
        console.log('Conexão com o banco de dados feita com sucesso.');
        return conexao.sync();
    })
    .catch(err =>{
        console.error('Erro ao tentar conectar com o banco de dados')
    });


// ROTAS E LÓGICA


