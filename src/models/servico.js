const { DataTypes } = require('sequelize');
const conexao = require('./config/database');

const servico = conexao.define('servico', {
    servico_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    empresa_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
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
        allowNull: false
    },
}, {
    tableName: 'Servico',
    timestamps: false
});

module.exports = servico;