require('dotenv').config();

const express=require('express');
const path=require('path');
const app=express();
const mongoose=require('mongoose');

let username=process.env.USERNAME;
let password=process.env.PASSWORD;
let mongoURL=`mongodb+srv://${username}:${password}@cluster0.lzuaa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const usersRouter=require('./routes/users');

mongoose.connect(mongoURL)
    .then(()=>{
        console.log(`DB Connection Success`);
    })
    .catch(e=>{
        console.log(`There was an error`, e)
    });


app.use('/api/user', usersRouter)

const port=process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log('listening on port '+port);
});

