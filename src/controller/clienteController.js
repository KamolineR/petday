const { Cliente, cliente } = require('../models');
const bcrypt = require('bcrypt');
const validator = require('validator');

const criarCliente = async (req, res) => {
    try{
        const { nome, telefone, endereco, email, senha } = req.body;
    
        const clienteExistente = await cliente.findOne({ where: { email } });
        if (clienteExistente) {
            return res.status(400).json({ erro: 'Email já cadastrado.'});
        }

        const senhaHash = await bcrypt.hash(senha);
        const novoCliente = await cliente.create({ nome, telefone, endereco, email, senha: senhaHash });
        
    }
}
