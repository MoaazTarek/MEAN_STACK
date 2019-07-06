var mongose = require('mongoose');  //to be able to create schema.

const SalesSchema = new mongose.Schema({
    proName: String,
    img: String,
    userName: String
})

var SalesModel = mongose.model('Sales',SalesSchema);    //creating model.
module.exports = SalesModel;    //exporting the model to use it in the req handler.