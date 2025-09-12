const router = require("express").Router();
const {
  createService,
  getServices,
  getServiceById,
  updateService,
  deleteService,
} = require("~/controllers/service");

router.post("/", createService);
router.get("/", getServices);
router.get("/:id", getServiceById);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

module.exports = router;
