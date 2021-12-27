require('dotenv').config();
const express=require('express');
const app=express();
const path=require('path');

let connectDb=require('./config/db');
connectDb();

app.use(express.static(path.join(__dirname, 'public'))); //public folder

let productRouter=require('./routes/productRoutes');
app.use('/api/products', productRouter);

//serves react app on any page
let pages=['/', '/product/*', '/about', '/cart'] //pages to serve build/index.html
for (let page of pages) {
    app.get(page, (req, res)=>{
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}
app.use(express.static(path.join(__dirname, 'build'))) //access to all scripts/styles

const port=process.env.PORT || 1028;
app.listen(port, _=>console.log(`Listening on port ${port}`));