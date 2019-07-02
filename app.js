const express = require ('express');
const app = express();
//Associar app.js e models
const db = require('./models/index');


app.listen(3842, () => {
    console.log('iniciou!')
});

app.use("/user", require("./routes/user"));
app.use("/productName", require("./routes/product"));


db.sequelize.sync();