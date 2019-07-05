const express = require('express');
const app = express();
const db = require('./models/index');
const models = require('./models');
const Products = models.Products;
const Users = models.Users;
const Orders = models.Orders;

app.listen(3842, () => {
  console.log('iniciou!')
});

app.use(express.json())

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
  Users.destroy({
    where: {
      id: req.params.id
    }
  }).then('Deletado', (result) => res.json(result))
);

// POST

// app.use("/createOrder", require("./routes/order"));

app.post("/createOrder", (req, res) => {
  Orders.create(req.body)
  .then(order => {
      res.send(order.dataValues)
  })
})


db.sequelize.sync();