const express = require('express')
const productRoutes = require('./src/routes/productRoutes')

//CRIAR UMA APLICAÇÃO EXPRESS
const app = express()

//DEFINIR A PORTA EM QUE O SERVIDOR IRÁ EXECUTAR
const porta = 7000

//DEFINIR A ROTA DE TESTE DA API
app.get('/', (req, res) => {
    res.send("API de Produtos está funcionando!")
})

//INICIA O SERVIDOR
app.listen(porta, () =>{
    console.log(`Servidor rodando em http://localhost:${porta}`)
})

app.use('/api/products', productRoutes)
app.use('/api/products/name', productRoutes)

app.use(express.json())