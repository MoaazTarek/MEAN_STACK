var mongose = require('mongoose');
const jwt = require('jsonwebtoken');
var userModel = require('../models/Users');    //importing the studentModel param from studentsM.

module.exports = {
    regestration: (req, res) => {
        if (req.body.userName && req.body.password) {
            userModel.findOne({ userName: req.body.userName }, (err, docs) => {
                if (!docs && !err) {
                    const user = new userModel({
                        userName: req.body.userName,
                        password: req.body.password
                    })
                    user.save()
                        .then(doc => res.json(doc))
                        .catch(err => res.send(err))
                } else if (docs) {
                    res.json('not_valid')
                } else {
                    res.json(err)
                }
            })
        }
        else {
            res.json({
                success: false,
                message: "please send all required data"
            })
        }
    },
    login: (req, res) => {
        userModel.findOne({ userName: req.body.userName }, (err, docs) => {
            if (docs) {
                if (docs.password === req.body.password) {
                    // console.log("docs => ",docs)
                    var token = jwt.sign(JSON.stringify(docs), "b1OFyhEJyZfdsfWxh4WKoLzb", {
                    })
                    res.json({
                        success: true,
                        message: 'login_successfully',
                        token: 'Bearer ' + token,
                        user: docs
                    })

                }
                else {
                    res.json({
                        success: false,
                        message: "wrong_password"
                    })
                }
            } else if (!docs) {
                res.json('not_exist')
            } else {
                res.json(err)
            }
        })
    }
}