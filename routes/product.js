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

router.delete('/post/:id', (req, res) => {
    Products.findById(req.params.id).then((product) => {
        return product.destroy();
    }).then(() => {
        res.status(200).send('deleted successfully a customer with id = ' + id);
    });
});

module.exports = router;