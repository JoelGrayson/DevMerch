require('dotenv').config();

const productsData = require('./data/products');
const connectDb = require('./config/db');
const Product = require('./models/Product');

connectDb();

async function importData() {
    try { //clear previous data & import
        localStorage.clear(); //removes previous localStorage items in cart
        await Product.deleteMany({});
        await Product.insertMany(productsData)
        console.log('Data import success')
        process.exit(0);
    } catch (err) {
        console.error('Error with data import');
        console.error(err);
        process.exit(1);
    }
}

importData();