
const mongoose = require("mongoose");
const validator = require("validator");

let user = new mongoose.Schema({
   email:String,
   password:String
});
const userModel = mongoose.model("User",user);

class User {

    constructor(email,password){
        this.email = email;
        this.password = password;
        this.errors = [];
    }

    async create(){
        console.log("VALOR EMAIL : "+this.email);
        console.log("VALOR SENHA : "+this.password);
        if(validator.isEmpty(this.email) || validator.isEmpty(this.password)) return "";
        const user = await userModel.create(this);
        return user;
    }


    async list(){
        const users = await userModel.find();
        return users;
    }

    async searchUser(id){
        const user = await userModel.findById(id);
        return user;
    }


}

module.exports = User

