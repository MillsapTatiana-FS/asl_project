let products =[
    {id: "1", slug: "Converse", title: "Nike Shoe", price:"79.99"},
    {id: "2", slug: "Jordans", title: "Nike Shoe", price:"109.99"},
    {id: "3", slug: "Air-Max", title: "Nike Shoe", price:"99.99"},
    {id: "4", slug: "Adidas", title: "Nike Shoe", price:"59.99"},
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
