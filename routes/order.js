const router = require('express').Router();
const models = require('../models');
const Orders = models.Orders;

router.get("/", (req, res) => {
    Orders.findAll()
        .then(order => {
            res.send(order)
        });

});

module.exports = router;