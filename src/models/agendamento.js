const { DataTypes } = require('sequelize');
const conexao = require('../config/database');

const agendamento = conexao.define('agendamento', {
    data: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    endereco_atendimento: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    transporte: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('')
    }
})