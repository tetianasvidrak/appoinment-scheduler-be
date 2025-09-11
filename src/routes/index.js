const router = require("express").Router();

const category = require("~/routes/category");
const client = require("~/routes/client");

router.use("/categories", category);
router.use("/clients", client);

module.exports = router;
