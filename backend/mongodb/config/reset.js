const connectDb = require('./connect');
connectDb();

const productsData = require('../data/products');
const ProductModel = require('../data/productModel');

async function resetData() { //clear previous data & import
    try {
        await ProductModel.deleteMany({});
        await ProductModel.insertMany(productsData)
        console.log('Data import success')
        process.exit(0);
    } catch (err) {
        console.error('Error with data import');
        console.error(err);
        process.exit(1);
    }
}

resetData();