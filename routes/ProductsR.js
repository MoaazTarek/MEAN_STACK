var express = require('express');
var ProductsC = require('../Controller/ProductsC')
var jwt = require('express-jwt');

var ProductsRouter = express.Router()

ProductsRouter.post('/add',
    jwt({
        secret: 'b1OFyhEJyZfdsfWxh4WKoLzb'
    }), ProductsC.add)
ProductsRouter.post('/edit',
    jwt({
        secret: 'b1OFyhEJyZfdsfWxh4WKoLzb'
    }), ProductsC.edit)
ProductsRouter.post('/delete',
    jwt({
        secret: 'b1OFyhEJyZfdsfWxh4WKoLzb'
    }), ProductsC.delete)
// ProductsRouter.get('/buy', ProductsC.buy)all
ProductsRouter.get('/get-all-products',
    jwt({
        secret: 'b1OFyhEJyZfdsfWxh4WKoLzb'
    }), ProductsC.getAllProducts)

ProductsRouter.post('/buy-products',
    jwt({
        secret: 'b1OFyhEJyZfdsfWxh4WKoLzb'
    }),
    ProductsC.buyProduct)



module.exports = ProductsRouter;