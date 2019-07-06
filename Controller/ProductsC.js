var mongose = require('mongoose');
const jwt = require('jsonwebtoken');
var productModel = require('../models/Products');
var salesModel = require('../models/Sales');



module.exports = {
    add: (req, res) => {
        if ((req.body.proName && req.body.img && req.body.price && req.body.rule) && req.body.rule === 1) {
            productModel.findOne({ proName: req.body.proName }, (err, docs) => {
                if (!docs && !err) {
                    const product = new productModel({
                        proName: req.body.proName,
                        img: req.body.img,
                        price: req.body.price
                    })
                    product.save()
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
    edit: (req, res) => {
        if (req.body._id && req.user.rule === 1) {
            productModel.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, docs) => {
                if (docs && !err) {
                    res.json(docs)

                } else if (!docs) {
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
    delete: (req, res) => {
        if (req.body._id && req.user.rule && req.user.rule === 1) {
            productModel.remove({ _id: req.body._id }, (err, docs) => {
                if (!err) {
                    res.json('removed successfully')
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
    getAllProducts: (req, res) => {
        if (req.user.rule === 1) {
            productModel.find({}, (err, docs) => {
                if (docs && !err) {
                    res.json({
                        success: true,
                        data: docs
                    })
                } else if (!docs && !err) {
                    res.json("something wrong")
                } else {
                    res.json(err)
                }
            })
        }
        else if (req.user.rule === 2) {
            productModel.find({ status: 'available' }, (err, docs) => {
                if (docs && !err) {
                    res.json({
                        success: true,
                        data: docs
                    })
                } else if (!docs && !err) {
                    res.json("something wrong")
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
    buyProduct: (req, res) => {
        if (req.body._id) {
            productModel.findOne({ _id: req.body._id }, (err, docs) => {
                if (docs && !err) {
                    salesModel.create({
                        proName: docs.proName,
                        img: docs.img,
                        userName: req.user.userName
                    }, (err, saleInstance) => {
                        if (saleInstance && !err) {
                            docs.status = 'not_available'
                            docs.save()
                                .then(doc => res.json(doc))
                                .catch(err => res.send(err))
                        }
                        else if (!saleInstance && !err) {
                            res.json("something wrong")
                        }
                        else {
                            res.json(err)
                        }
                    })
                }
                else if (!docs && !err) {
                    res.json("something wrong")
                }
                else {
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
    }
}