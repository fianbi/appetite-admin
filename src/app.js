//reuquerer o express para o app.js
const express = require('express')
//criar uma constante app que ira receber as funcionabilidades do express
const app = express()
//criar uma constante para ser utilizada como path
const path = require('path')

//configurar o ejs - resp. da gestão do html (views)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'../src/views'))

//configurar o app para utilizar URLs
app.use(express.urlencoded({extended:false}))
//configurar a pasta public do sistema
app.use(express.static(path.join(__dirname,'../public')))

//exemplificar a rota inicial do app
app.get('/',(req,res)=>{
    res.render('home_view')
})

//criar a rota para a página de login
app.get('/login', (req,res)=>{
    res.render('login_view')
})

//criar a arota para acesso ao dashboard
app.get('/dashboard',(req,res)=>{
    res.render('dashboard_view')
})

//criar a arota para acesso ao recipe
app.get('/recipe',(req,res)=>{
    res.render('recipe_view')
})

//exportar o app para ser utilizado no server.js
module.exports = app