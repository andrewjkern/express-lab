const express = require("express");
const cartItems = express.Router();

const cart = [
  {
    id: 12,
    product: "Apple",
    price: "$2",
    quantity: "1",
  },
  {
    id: 34,
    product: "Milk",
    price: "$3",
    quantity: "1",
  },
  {
    id: 56,
    product: "Coffee",
    price: "$5",
    quantity: "1",
  },
  {
    id: 78,
    product: "Wine",
    price: "$10",
    quantity: "1",
  },
];

//Students
cartItems.get("/", (req, res) => {
  res.json({
    teacher: "Clinton Johnson",
    students: cart,
    cart_size: cart.length,
  });
});

//Get a specific Student
cartItems.get("/:id", (req, res) => {
  res.json({
    teacher: "Clinton Johnson",
    student: cart[req.params.id - 1],
  });
});
cartItems.post("/", (req, res) => {
  cart.push(req.body);
  res.json({
    msg: "Added new student",
    cart: cart,
    cartItems: req.body,
  });
});
cartItems.put("/", (req, res) => {
  res.json("Updating cart");
});
cartItems.delete("/", (req, res) => {
  res.json("Deleting a cart");
});

module.exports = cartItems;
