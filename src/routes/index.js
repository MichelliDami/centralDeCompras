const express = require("express");
const router = express.Router();

// Tudo minúsculo para evitar erro no Linux/Render
router.use("/users", require("./usersRoutes"));
router.use("/suppliers", require("./supplierRoutes"));
router.use("/stores", require("./storeRoutes"));
router.use("/products", require("./productRoutes"));
router.use("/orders", require("./orderRoutes"));
router.use("/campaigns", require("./campaignRoutes"));

module.exports = router;
