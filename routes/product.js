const router = require('express').Router();
const models = require('../models');
const Products = models.Products;

router.get("/", (req, res) => {
    Products.findAll()
        .then(product => {
            res.send(product)
        });

});

router.delete('/post/:id', (req, res) => {
    Products.findById(req.params.id).then((product) => {
        return product.destroy();
    }).then(() => {
        res.status(200).send('deleted successfully a customer with id = ' + id);
    });
});

module.exports = router;