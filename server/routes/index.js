"use strict";

const Router = require("express").Router();

const productRouter = require("./product");

Router.get("/", (req, res) => {
  res.status(200).json({
    message: `xenElectronic server ready`,
  });
});

Router.use("/products", productRouter);

module.exports = Router;
