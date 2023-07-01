
const mongoose = require("mongoose");


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
        if(this.email == NULL || this.password == NULL) return "";
        const user = await userModel.create(this);
        return user;
    }

}


module.exports = User

