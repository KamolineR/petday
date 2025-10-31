const { DataTypes } = require('sequelize');
const conexao = require('../config/database');

const pet = conexao.define('pet', {
    nome: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    especie: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    idade: {
        type: DataTypes.INTEGER
    }
});