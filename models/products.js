let products =[
   {id: 1,
    "slug": "nike-shoe",
    "label": "Nike Shoe"} 
]

const all =  () => {
    return products
}

const find = (id) => {
    return products.find(p => p.id === id)
}

const create =(product) => {
    products.push(product)
    return products
}

const update = (id, product) => {
    products.map((p) => {
        return (p.id === id) ? product : p
    })
    return products
}

const remove = (id) => {
    products = product.filter(p => p.id !== id)
    return products
}

module.exports = { all, find, update, remove, create}
