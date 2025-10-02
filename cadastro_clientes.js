app.post('/cadastro', async (req, res) => {
    try {
        const {nome, telefone, endereco, email, senha} = req.body;
        const novoCadastro = await cadastro.create({ nome, telefone, endereco, email, senha});
        res.status(200).json(novoCadastro)
    }
})