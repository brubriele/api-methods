const express = require ('express');
const app = express();
//Associar app.js e models
const db = require('./models/index');


app.listen(3842, () => {
    console.log('iniciou!')
});

db.sequelize.sync();