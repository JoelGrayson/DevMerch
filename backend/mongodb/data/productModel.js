const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    countInStock: {type: Number, required: true},
    price: {type: Number, required: true},
    imageUrl: {type: String, required: true}
});

module.exports=mongoose.model('Product', productSchema);