const router = require("express").Router();

const {
  createClient,
  getClients,
  updateClient,
  deleteClient,
} = require("~/controllers/client");

router.post("/", createClient);
router.get("/", getClients);
router.put("/:id", updateClient);
router.delete("/:id", deleteClient);

module.exports = router;
