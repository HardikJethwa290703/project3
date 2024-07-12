const mongoose = require("mongoose");

const connect = () => {
    mongoose.connect("mongodb://localhost:27017/mern_project")
    .then((res)=>{
        console.log("Connection done with db");
    }).catch((error)=>{
        console.log("Conection failed with db");
    })
}

module.exports = connect;