var mongose = require('mongoose');  //to be able to create schema.

const productSchema = new mongose.Schema({
    proName: String,
    img: String,
    price: Number,
    status: { type: String, default: 'available' }
})

var productModel = mongose.model('products', productSchema);    //creating model.
module.exports = productModel;    //exporting the model to use it in the req handler.