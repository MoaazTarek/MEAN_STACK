var express = require('express');
var salesC = require('../Controller/SalesC')
var jwt = require('express-jwt');

var UserRouter = express.Router();  // each req has a method and an end point with handler ,

UserRouter.get('/get-all-sales',
    jwt({
        secret: 'b1OFyhEJyZfdsfWxh4WKoLzb'
    }), salesC.getAllsales)
// UserRouter.post('/add', salesC.add)
// UserRouter.show('/show', salesC.show)
// UserRouter.post('/add', salesC.add)
// UserRouter.show('/show', salesC.show)




module.exports = UserRouter;
