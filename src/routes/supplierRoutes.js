const express = require("express");
const SuppliersController = require("../controllers/suppliersController");

const router = express.Router();

router.get("/", SuppliersController.index);
router.get("/:id", SuppliersController.show);
router.post("/", SuppliersController.store);
router.put("/:id", SuppliersController.update);
router.delete("/:id", SuppliersController.delete);

module.exports = router;
