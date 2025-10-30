const {DataTypes} = require = ('sequelize');
const conexao = requere = ('../config/database');

const empresa = conexao.define('empresa', {
    nome: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    telefone: {
        type: DataTypes.INTEGER(20),
        allowNull: false,
    },
});