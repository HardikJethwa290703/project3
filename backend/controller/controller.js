const model = require("../model/model.js");

// AddUser
const addUser = async(req,res) => {
    const user = new model({
        name : req.body.name,
        email : req.body.email,
        username : req.body.username,
        password : req.body.password
    })
    try{
        const result = user.save();
        res.json(result);
    }
    catch(error){
        console.log(error);
    }
};

// Fetch details
const fetchUser = async(req,res) => {
    const user = await model.find({username : req.body.username});
    console.log(req.body.username);
    console.log(req.body.password);
    // console.log(user[0]);
    const user1 = user[0];
    // console.log(user1.username);
    try{
        if(!user1){
            console.log("Not login yet");
            // console.log(res);
            res.json();
        }  
        else{
            if(req.body.username!=null && req.body.password!=null){
                if(user1.username == req.body.username && user1.password == req.body.password){            
                    console.log("Login successfully");
                    res.json(user1);
                }
                else{
                    console.log("Not any login yet");                    
                }
            }      
            else{
                console.log("Not any login yet");
            } 
        }             
    }    
    catch(error){
        console.log(error.message);
    }
}
module.exports = {addUser,fetchUser};