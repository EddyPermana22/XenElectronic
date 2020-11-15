"use strict";

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: `xenElectronic server ready`,
  });
});

app.listen(port, () =>
  console.log(`xenElectronic server running on port ${port}`)
);
