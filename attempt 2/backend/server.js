require('dotenv').config();
const express=require('express');
const app=express();

let connectDb=require('./config/db');
connectDb();

const port=process.env.PORT || 1028;
app.listen(port, _=>console.log(`Listening on port ${port}`));