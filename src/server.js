const app = require('./app');  // puxa o app.js (configuração do express)
require('./config/database');

app.listen(3000, () => {
    console.log('Servidor inicializado');   // inicio do servidor
});
