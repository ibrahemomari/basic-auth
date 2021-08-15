"use strict";

const express = require("express");
const logger = require("./middleware/logger");
const userRoute = require("./routes/user");

const app = express();
app.use(express.json());
app.use(logger);
app.use(userRoute);

const start = (port) => {
  app.listen(port, () => {
    console.log(`The server start running at port ${port}`);
  });
};

module.exports = {
  app: app,
  start: start,
};
