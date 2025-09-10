const express = require('express')

const router = express.Router();

const productController = require('../controller/productController')

//Criando as rotas da nossa API

//Rota para obter todos os usuários
router.get('/', productController.getAllProducts)

//Rota para obter um usuário por ID
router.get('/:id', productController.getProductById)

router.get('/name/:name', productController.getProductByName)

//Rota para criar um novo usuário
//router.post('/', userController.createUser)

module.exports = router;