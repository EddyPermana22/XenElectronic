"use strict";

const Router = require("express").Router();
const productController = require("../controllers/product");

//get all products
Router.get("/", productController.getAll);
//get product by id
Router.get("/:id", productController.getDetail);
//create new product
Router.post("/", productController.create);
//update product by id
Router.patch("/:id", productController.update);
//remove product
Router.delete("/:id", productController.remove);

module.exports = Router;
