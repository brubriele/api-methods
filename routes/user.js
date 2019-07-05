const router = require('express').Router();
const models = require('../models');
const Users = models.Users;

router.get("/", (req, res) => {
    Users.findAll()
    .then(users => {
        // const userList = users.map( user => user.dataValues.id == req.params.usersId ? user.dataValues : false );
        res.send(users)
    });
    
});

router.get("/:id", (req, res) => {
   Users.findByPk(req.params.id)
   .then(user => res.send(user))    
});

router.delete('/post/:id', (req, res) => {
    Users.findById(req.params.id).then((user) => {
        return user.destroy();
    }).then(() => {
        res.status(200).send('deleted successfully a customer with id = ' + id);
    });
});


module.exports = router;