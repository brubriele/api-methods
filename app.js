const express = require('express');
const app = express();
const db = require('./models/index');
const models = require('./models');
const Products = models.Products;


app.listen(3842, () => {
  console.log('iniciou!')
});

// GET
app.use("/user", require("./routes/user"));
app.use("/productName", require("./routes/product"));
app.use("/orders", require("./routes/order"));


// DELETE
app.delete("/productName/:id", (req, res) =>
  Products.destroy({
    where: {
      id: req.params.id
    }
  }).then((result) => res.json(result))
);

app.delete("/user/:id", (req, res) =>
  Products.destroy({
    where: {
      id: req.params.id
    }
  }).then((result) => res.json(result))
);

// POST


db.sequelize.sync();