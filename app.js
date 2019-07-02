const express = require ('express');
const app = express();
//Associar app.js e models
const db = require('./models/index');
const models = require('./models');
const Products = models.Products;


app.listen(3842, () => {
    console.log('iniciou!')
});

app.use("/user", require("./routes/user"));
app.use("/productName", require("./routes/product"));
// app.delete("/Destroy", require("./routes/product"));

// app.delete('/models/products', products.delete);
app.delete( "/productName/:id", (req, res) =>
    Products.destroy({
      where: {
        id: req.params.id
      }
    }).then( (result) => res.json(result) )
  );

db.sequelize.sync();