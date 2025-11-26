const express = require("express");
const StoresController = require("../controllers/storesController");

const router = express.Router();

router.get("/", StoresController.index);
router.get("/:id", StoresController.show);
router.post("/", StoresController.store);
router.put("/:id", StoresController.update);
router.delete("/:id", StoresController.delete);

module.exports = router;
