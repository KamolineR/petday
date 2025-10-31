const { DataTypes } = require('sequelize');
const conexao = require('../config/database');

const agendamento_servico = conexao.define('agendamento_servico', {
    preco_unitario: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
    },
    subtotal: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
    },
    observacao: {
        type: DataTypes.STRING(255),
    },
}, {
    tableName: 'agendamento',
    timestamps: true
});

agendamento_servico.sync();

module.exports = agendamento_servico;