"use strict";

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const port = process.env.PORT;
const mongoURI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: `xenElectronic server ready`,
  });
});

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`connected to mongoDB: ${mongoURI}`);
    app.listen(port, () =>
      console.log(`xenElectronic server running on port ${port}`)
    );
  })
  .catch((err) => {
    console.log(`failed to start server, ${err}`);
  });
