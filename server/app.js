"use strict";

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Router = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

const port = process.env.PORT;
const mongoURI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(Router);
app.use(errorHandler);

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(`connected to mongoDB: ${mongoURI}`);
    app.listen(port, () =>
      console.log(`xenElectronic server running on port ${port}`)
    );
  })
  .catch((err) => {
    console.log(`failed to start server, ${err}`);
  });
