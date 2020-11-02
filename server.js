"use strict";
const express = require("express");

const app = express();
const port = 3000;

const cartItems = require("./Routes/cartItems");

app.use(express.json());
app.use("/cartItems", cartItems);

app.listen(port, () => {
  console.log("Your server has started on port:", port);
});
//Setup Routes
app.get("/", (req, res) => {
  res.json({
    msg: "Hi from Server",
  });
});

app.listen(port, () => {
  console.log("Server started");
});
