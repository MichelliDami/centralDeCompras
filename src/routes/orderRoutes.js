const express = require("express");
const OrdersController = require("../controllers/ordersController");

const router = express.Router();

router.get("/", OrdersController.index);
router.get("/:id", OrdersController.show);
router.post("/", OrdersController.store);
router.put("/:id", OrdersController.update);
router.delete("/:id", OrdersController.delete);

module.exports = router;
