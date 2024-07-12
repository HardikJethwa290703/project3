const express = require('express');
const connect = require('./connection.js');
const router = require('./routing.js');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
connect();
app.use(router);

app.listen(4000,()=>{
    console.log("Server is running");
})