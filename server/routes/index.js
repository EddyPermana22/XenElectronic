"use strict";

const Router = require("express").Router();

Router.get("/", (req, res) => {
  res.status(200).json({
    message: `xenElectronic server ready`,
  });
});

module.exports = Router;
