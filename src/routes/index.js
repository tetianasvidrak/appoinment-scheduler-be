const router = require("express").Router();

const category = require("~/routes/category");
const client = require("~/routes/client");
const service = require("~/routes/service");

router.use("/services", service);
router.use("/categories", category);
router.use("/clients", client);

module.exports = router;
