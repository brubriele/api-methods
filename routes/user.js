const router = require('express').Router();
const models = require('../models');
const Users = models.Users;

router.get("/", (req, res) => {
    Users.findAll()
    .then(users => {
        const userList = users.map( user => user.dataValues);
        res.send(userList)
    });
    
});

module.exports = router;