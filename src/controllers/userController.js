const userModel = require("../models/UserModel");
const validator = require("validator");

exports.index = function(req,send){
    send.render("index")
}


exports.create = async function(req,send){
    const user = new userModel(req.body.email,req.body.senha);
    try{
        const response = await user.create();
        console.log("VALOR DO RESPONSE : "+response);
        if(response == ""){
            console.log("ENTROU NO IF");
             req.flash("errors"," Algum campo não foi preenchido! ");
             req.session.save(() => send.redirect('/user/create'));
             return;
        }


        console.log("  ENTROU NO OUTRO IF ");
        req.flash("success"," Dados salvo com sucesso! ");
        req.session.save(() => send.redirect('/user/create'));
        return;


    }catch(error){
        console.log(error);
    }
}


exports.update = async function(req,send){
    const user = new userModel(req.body.email,req.body.senha);
    try{
        const response = await user.update();

        send.redirect("/");
    }catch(error){
        console.log(error);
    }
}

exports.edit = async function(req,send){
    const user = new userModel();
    //console.log("ID PARA ATUALIZAÇÃO : "+req.params.id);
    const response = await user.searchUser(req.params.id);
    console.log("USUARIO : "+response);
    console.log("ID : "+response._id);
    console.log("EMAIL : "+response.email);
    console.log("SENHA : "+response.senha);
    send.render("edit",{response});
}


exports.show = async function(req,send){
    const users = new userModel();
    const list = await users.list();
    send.render("list",{list});
}

exports.delete = async function(req,send){
    const user = new userModel();
    const list = await user.delete();
    send.redirect("/users");
}