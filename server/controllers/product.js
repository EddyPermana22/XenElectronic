"use strict";

const productModel = require("../models/product");

class Product {
  static getAll = async (req, res, next) => {
    try {
      const products = await productModel.find();

      res.status(200).json({
        products,
      });
    } catch (error) {
      next(error);
    }
  };

  static getDetail = async (req, res, next) => {
    try {
      const { id } = req.params;

      const product = await productModel.findById(id);

      res.status(200).json({
        product,
      });
    } catch (error) {
      next(error);
    }
  };

  static create = async (req, res, next) => {
    try {
      const { title, image, description, price, stock } = req.body;

      const newProductData = {
        title,
        image,
        description,
        price,
        stock,
      };

      const product = await productModel.create(newProductData);
      if (!product) {
        throw new Error("create product failed!");
      }

      res.status(201).json({
        message: `product created!`,
        product,
      });
    } catch (error) {
      next(error);
    }
  };

  static update = async (req, res, next) => {
    try {
      const { title, image, description, price, stock } = req.body;
      const { id } = req.params;

      const updateProductData = {
        title,
        image,
        description,
        price,
        stock,
      };

      const product = await productModel.findByIdAndUpdate(
        id,
        updateProductData,
        { new: true, runValidators: true }
      );
      if (!product) {
        throw new Error("update product failed!");
      }

      res.status(200).json({
        message: `product updated!`,
        product,
      });
    } catch (error) {
      next(error);
    }
  };

  static remove = async (req, res, next) => {
    try {
      const { id } = req.params;

      const product = await productModel.findOneAndDelete(id);

      res.status(200).json({
        message: `product deleted`,
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = Product;
