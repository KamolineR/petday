const { DataTypes } = require('sequelize');
const conexao = require('../config/database');

const porte = conexao.define('porte', {
    descricao: {
        type: DataTypes.ENUM('Pequeno', 'Médio', 'Grande'),
        allowNull: false,
    },
}, {
    tableName: 'porte',
    timestamps: false
});

porte.sync();

module.exports = porte;