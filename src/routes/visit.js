const router = require("express").Router();
const {
  createVisit,
  getVisits,
  getVisitById,
  updateVisit,
  deleteVisit,
} = require("~/controllers/visit");

router.post("/", createVisit);
router.get("/", getVisits);
router.get("/:id", getVisitById);
router.put("/:id", updateVisit);
router.delete("/:id", deleteVisit);

module.exports = router;
