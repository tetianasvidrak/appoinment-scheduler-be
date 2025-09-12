const router = require("express").Router();
const {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require("~/controllers/employee");

router.post("/", createEmployee);
router.get("/", getEmployees);
router.get("/:id", getEmployeeById);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

module.exports = router;
