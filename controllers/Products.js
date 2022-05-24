const { Product } = require('../models');

const index = (req, res) => {
    const products = Product.all();
    res.render('views/products/index', { products });
};

const form = ( req, res) => {
    if ( typeof req.params.id !== "undefined" ){
        const product = Products.find(req.params.id)
        res.render('views/products/edit', { product })
    } else {
        res.render('views/products/create')
    }
};

const show = ( req, res) => {
    const product = Products.find(req.params.id);
    res.render('views/products/show', { product });
};

const create = ( req, res) => {
    const product = Products.create(req.body);
    res.redirect('/product/' + product.id);
};

const update = ( req, res) => {
    const product = Products.update(req.params.id, req.body);
    resredirect('/products/' + req.params.id);
};

const remove = (req,res) => {
    const product = Products.remove(req.params.id);
    res.redirect('/products');
};
module.exports = { index, form, show, create, update, remove };