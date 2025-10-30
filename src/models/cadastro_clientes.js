const { DataTypes } = require('sequelize');
const conexao = require('../config/database');

const cliente = conexao.define('cliente', {
    nome: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    telefone: {
        type: DataTypes.INTERGER(20),
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

cliente.sync();

module.exports = cliente;