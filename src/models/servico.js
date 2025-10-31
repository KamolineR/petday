const { DataTypes } = require('sequelize');
const conexao = require('../config/database');

const servico = conexao.define('servico', {
    tipo: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    preco_base: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    duracao_min: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
}, {
    tableName: 'Servico',
    timestamps: false
});

servico.sync();

module.exports = servico;