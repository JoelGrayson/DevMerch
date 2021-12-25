require('dotenv').config();

const express=require('express');
const path=require('path');
const app=express();
app.use(express.json());

//<Mongoose
const mongoose=require('mongoose');

let username=process.env.USERNAME;
let password=process.env.PASSWORD;
let mongoURL=`mongodb+srv://${username}:${password}@cluster0.lzuaa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;


mongoose.connect(mongoURL)
.then(()=>{
    console.log(`DB Connection Success`);
})
.catch(e=>{
    console.log(`There was an error`, e)
});
// />

const usersRouter=require('./routes/users');
app.use('/api/users', usersRouter);

const authRouter=require('./routes/auth');
app.use('/api/auth', authRouter);



const port=process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log('listening on port '+port);
});

