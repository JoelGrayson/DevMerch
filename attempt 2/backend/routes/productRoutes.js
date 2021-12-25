const router=require('express').Router();
const Product = require('../models/Product');

// GET /api/products/ -> Get all products
router.get('/', async (req, res, next) => { //get all products
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});

// GET /api/products/:id -> GET a product by id
router.get('/:id', async (req, res) => { //getProductById
    try {
        let idFromParams=req.params.id;
        const product = await Product.findById(idFromParams);
        res.json(product);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});

module.exports=router;