"use strict";

const Router = require("express").Router();

// Router.get("/", (req, res, next) => {
//   res.status(200).json({ message: `Product endpoint ready!` });
// });

Router.get("/", (req, res, next) => {
  res.status(200).json({
    message: `get all products`,
  });
});

Router.get("/:id", (req, res, next) => {
  res.status(200).json({
    message: `get product by id`,
  });
});

Router.post("/", (req, res, next) => {
  res.status(200).json({
    message: `insert new product`,
  });
});

Router.patch("/:id", (req, res, next) => {
  res.status(200).json({
    message: `update product by id`,
  });
});

Router.delete("/:id", (req, res, next) => {
  res.status(200).json({
    message: `delete product by id`,
  });
});

module.exports = Router;
