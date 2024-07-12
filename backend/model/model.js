const mongoose = require("mongoose");

// Schema
const schema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
});

// Model
const model = mongoose.model("signup",schema);

module.exports = model;