const productModel = require('../model/productModel');

//Método do Controlador para listar todos os usuarios
const getAllProducts = (req, res) => {
    const products = productModel.findAll();
    res.status(200).json(products);
}

//Método do Controlador para obter um usuário por ID
const getProductById = (req, res) => {

    //Pegando o id que foi enviado na requisicao
    const id = parseInt(req.params.id);

    //Chamando o metodo findById do userModel
    const product = productModel.findById(id);

    if(product){
        //Responder com status code de 200 (Sucesso!)
        //e devolver os dados do usuario em formato json
        res.status(200).json(product);
    }else{
        res.status(404).json({ mensagem: 'Produto não encontrado no banco de dados!'});
    }
};

// Método do controlador para criar um novo usuário
const createProduct = (req, res) => {

    //Pegando os dados que foram enviados pelo Body (Corpo) da Requisiçao
    const {name, descricao, preco, categoria, estoque, ativo} = req.body

    //Validar se foram enviados
    if(!name || !descricao || !preco || !categoria || !estoque || !ativo){
        return res.status(400).json({mensagem: 'Todos os dados são obrigatórios'})
    } 
    
    else{
        const newProduct = productModel.create({name, descricao, preco, categoria, estoque, ativo});
        res.status(201).json(newProduct);
    }
}

const getProductByName = (req, res) => {
    // Pegando o id enviado na requisição
    const name = req.params.name;

    // Chamando o método findById do productModel
    const product = productModel.findByName(name);

    if (product) {
        // Se o produto for encontrado, retorna apenas o nome
        res.status(200).json(product);
    } else {
        res.status(404).json({ mensagem: 'Produto não encontrado no banco de dados!' });
    }
};

const updateProducts = (req, res) => {
    const {name, descricao, preco, categoria, estoque, ativo} = req.body;
    let id = parseInt(req.params.id)

    const updateProd = productModel.update(id, {name, descricao, preco, categoria, estoque, ativo})
    res.status(200).json(updateProd)
}

const deletarProduct = (req, res) => {
    let id = parseInt(req.params.id)

    if(id){
        productModel.deleteProduct(id)
        res.status(200).json(id)
    } else{
        res.status(404).json({mensagem: "Produto não encontrado!"})
    }
}



module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    getProductByName,
    updateProducts,
    deletarProduct
}
