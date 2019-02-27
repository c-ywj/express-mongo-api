var express = require("express"); 
var mongojs = require("mongojs");
var router = express.Router(); 
var config = require("../config");

var db = mongojs(config.database_cloud, ['products']);

router.get("/products", function(req, res, next) { 
    db.products.find( (err, data) => {
        if (err) {
            res.send(err);
        }
        res.json(data);
    })
});

router.get("/products/:id", function(req, res, next) {
    db.products.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, data) => {
        if (err) {
            res.send(err);
        }
        res.json(data);
    })
});

router.post("/products", (req, res, next) => {
    var product = req.body;

    if(!product.product || !product.category || !product.price) {
        res.status(400);
        res.json({"error": "Very very bad data"})
    } else {
        db.products.save(product, (err, data) => {
            if (err) {
                res.send(err);
            }
            res.json(data);
        })
    }
});

router.put("/products/:id", (req, res, next) => {
    var product = req.body;
    var updatedProduct = {};

    if(product.product)
        updatedProduct.product = product.product;

    if(product.category)
    updatedProduct.category = product.category;

    if(product.price)
        updatedProduct.price = product.price;

    if(Object.keys(updatedProduct).length == 0) {
        res.status(400);
        res.json({"error": "bad data"});
    }else {
        db.products.update(
            {
                _id: mongojs.ObjectId(req.params.id)}, 
                updatedProduct, 
                {},
                (err, data) => {
                    if(err) res.send(err)
                res.json(data)
            }
        )
    }
})

router.delete("/products/:id", function(req, res, next) {
    db.products.remove({_id: mongojs.ObjectId(req.params.id)}, (err, data) => {
        if (err) {
            res.send(err);
        }
        res.json(data);
    })
});

module.exports = router; 