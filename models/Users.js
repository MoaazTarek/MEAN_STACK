var mongose = require('mongoose');  //to be able to create schema.

const userSchema = new mongose.Schema({
    userName: String,
    password: { type: String, minlength: 4, maxlength: 8 },
    rule: { type: Number, default: 2 }
})

var userModel = mongose.model('users', userSchema);    //creating model.
module.exports = userModel;    //exporting the model to use it in the req handler.