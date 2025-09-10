let products = [
    {id: 1, name: 'Tijolo', descricao: 'tijolo baiano de 6 furos', preco: 1.50, categoria: 'Construção', estoque: 5049, ativo: true},
    {id: 2, name: 'Cimento', descricao: 'Cimento Votoran de 50kg', preco: 31.90, categoria: 'Construção', estoque: 438, ativo: true},
    {id: 3, name: 'Cerâmica', descricao: 'Portinari 50x50', preco: 62.49, categoria: 'Revestimento', estoque: 275, ativo: true},
    {id: 4, name: 'Tinta', descricao: 'Lata de tinta acrílica Coral 18L Cinza Médio', preco: 369.90, categoria: 'Pintura', estoque: 0, ativo: false}
]

const findAll = () => {
    return products;
}

const findById = (id) => {
    return products.find(product => product.id === id)
}

const findByName = (name) => {
    return products.find(products => products.name.toLowerCase() === name.toLowerCase())
}

const create = (newProduct) => {
    const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
    const productWithId = {id: newId, ...newProduct}
    products.push(productWithId)
    return productWithId
}

const update = (id, productAlter) => {
    for (let i = 0; i < products.length; i++){
        if(products[i].id === id){
            products[i].name = productAlter.name
            products[i].descricao = productAlter.descricao
            products[i].preco = productAlter.preco
            products[i].categoria = productAlter.categoria
            products[i].estoque = productAlter.estoque
            products[i].ativo = productAlter.ativo
        }
    }
}

const deleteProduct = (id) => {
    for (let i = 0; i < products.length; i++){
        if(products[i].id === id){
            products.splice(i, 1)
        }
    }
}

module.exports = {
    findAll,
    findById,
    findByName,
    create,
    update,
    deleteProduct
}