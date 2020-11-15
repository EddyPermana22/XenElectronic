"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      unique: true,
      minlength: 3,
      maxlength: 200,
      required: true,
    },
    image: {
      type: String,
      trim: true,
      default: "https://via.placeholder.com/350",
    },
    description: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 2000,
      default: "no description for this product",
    },
    price: {
      type: Number,
      min: 0,
      max: 999999999,
      required: true,
    },
    stock: {
      type: Number,
      min: 0,
      max: 999,
      default: 0,
    },
  },
  { versionKey: false, timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
