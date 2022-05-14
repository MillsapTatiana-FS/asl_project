let products =[
    {id: "1", slug: "nike-shoe", title: "Nike Shoe"},
    {id: "1", slug: "nike-shoe", title: "Nike Shoe"},
    {id: "1", slug: "nike-shoe", title: "Nike Shoe"},
    {id: "1", slug: "nike-shoe", title: "Nike Shoe"},
];

const all =  () => {
    return products;
};

const find = (id) => {
    return products.find((p) => p.id === id);
};

const create = (product) => {
    product.id = Number(products[products.length -1].id) + 1 + ""
    products.push(product);
    return products;
};

const update = (id, product) => {
    products = products.map((p) => {
        return p.id === id ? product : p;
    });
    return find(id);
};

const remove = (id) => {
    products = products.filter((p) => p.id !== id);
    return products;
};

module.exports = { all,  find, create,  update,  remove };
