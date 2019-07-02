const express = require ('express');
const app = express();
//Associar app.js e models
const db = require('./models/index');


app.listen(3842, () => {
    console.log('iniciou!')
});

app.use("/user", require("./routes/user"));
app.use("/productName", require("./routes/product"));
// app.delete("/Destroy", require("./routes/product"));

// app.delete('/models/products', products.delete);


db.sequelize.sync();