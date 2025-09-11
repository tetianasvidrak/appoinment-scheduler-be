const express = require("express");
const cors = require("cors");

const initialization = (app) => {
  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
};

module.exports = initialization;
