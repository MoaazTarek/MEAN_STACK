var mongose = require('mongoose');
const jwt = require('jsonwebtoken');
var salesModel = require('../models/Sales');

module.exports = {
    getAllsales: (req, res) => {
        if (req.user.rule === 1) {
            salesModel.find({}, (err, docs) => {
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
}