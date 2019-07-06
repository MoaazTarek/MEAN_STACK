var express = require('express');
var usersC = require('../Controller/UsersC')

var UserRouter = express.Router();  // each req has a method and an end point with handler ,

UserRouter.post('/user-regestration', usersC.regestration)
UserRouter.post('/user-login', usersC.login)




module.exports = UserRouter;