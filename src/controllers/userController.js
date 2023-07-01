const userModel = require("../models/UserModel");

exports.index = function(req,send){
    
    send.render("index")

}


exports.create = async function(req,send){
    const user = new userModel(req.body.email,req.body.password);
    try{
        const response = await user.create();
        send.redirect("/");
    }catch(error){
        console.log("OPA,DEU UM ERRO ");
    }
}