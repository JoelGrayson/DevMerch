const express=require('express');
const path=require('path');
const app=express();
const mongoose=require('mongoose');

let username='joel_user';
let password='user_joel';
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.lzuaa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

app.use(express.static(path.join(__dirname, 'public')));

const port=process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log('listening on port '+port);
});

