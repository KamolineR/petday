const express = require('express')

const app = express() // criação do servidor
app.listen(3000, () => {
    console.log('Servidor rodando');
});
