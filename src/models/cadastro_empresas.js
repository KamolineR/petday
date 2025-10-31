const {DataTypes} = require = ('sequelize');
const conexao = requere = ('../config/database');

const empresa = conexao.define('empresa', {
    empresa_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    telefone: {
        type: DataTypes.INTEGER(20),
        allowNull: false
    }
}, {
    tableName: 'empresa',
    timestamps: false
});


module.exports = empresa