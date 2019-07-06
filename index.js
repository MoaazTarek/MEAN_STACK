var express = require('express');
var mongose = require('mongoose');
var UserRouter = require('./routes/UsersR');
var SalesRouter = require('./routes/SalesR');
var ProductRouter = require('./routes/ProductsR');


var app = express();
var port = 4000;


mongose.connect('mongodb://localhost:27017/Pro', (err) => {    //creating th db and connect to it.
    if (!err) {
        console.log('connect to db')
    }
});

app.use(express.json());

app.use('/Users', UserRouter);
app.use('/Sales', SalesRouter);
app.use('/Products', ProductRouter);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));