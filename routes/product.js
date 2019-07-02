const router = require('express').Router();
const models = require('../models');
const Products = models.Products;

router.get("/", (req, res) => {
    Products.findAll()
    .then(product => {
        // const userList = users.map( user => user.dataValues.id == req.params.usersId ? user.dataValues : false );
        res.send(product)
    });
    
});

router.get("/:productName", (req, res) => {
    Products.findOne(req.params.productName)
   .then(product => res.send(product))    
});



module.exports = router;