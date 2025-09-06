//configurar a utilização das variaveis de ambiente
require('dotenv').config()
//requerer a utilização do app.js
const app = require('./src/app')

//inicializar o servidor 
app.listen(process.env.PORTA,()=>{
    console.log('\n servidor inicializado com sucesso na porta :', process.env.PORTA)
})