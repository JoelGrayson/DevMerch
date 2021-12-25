require('dotenv').config();
const mongoose=require('mongoose');

async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Successfully connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection fail');
        console.error(err);
        process.exit(1); //error
    }
}

module.exports=connectDb;