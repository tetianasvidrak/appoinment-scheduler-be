const router = require("express").Router();

const client = require("~/routes/client");

router.use("/clients", client);

module.exports = router;
