const express = require("express");
const ProductsController = require("../controllers/productsController");

const router = express.Router();

router.get("/", ProductsController.index);
router.get("/:id", ProductsController.show);
router.post("/", ProductsController.store);
router.put("/:id", ProductsController.update);
router.delete("/:id", ProductsController.delete);

module.exports = router;
