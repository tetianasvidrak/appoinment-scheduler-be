const router = require("express").Router();

const category = require("~/routes/category");
const client = require("~/routes/client");
const service = require("~/routes/service");
const employee = require("~/routes/employee");
const visit = require("~/routes/visit");

router.use("/categories", category);
router.use("/clients", client);
router.use("/services", service);
router.use("/employees", employee);
router.use("/visits", visit);

module.exports = router;
