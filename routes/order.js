const router = require('express').Router();
const models = require('../models');
const Orders = models.Orders;
const OrderProducts = models.OrderProducts;

router.get("/", (req, res) => {
    Orders.findAll()
        .then(order => {
            res.send(order)
        });

});

router.get("/orders/:id", (req, res) => {
    Orders.findByPk(req.params.id, {include:[Users, OrderProducts]})
        .then(order => {
            res.send(order)
        });

});



module.exports = router;