const express = require("express");
const router = express.Router();

// Rotas principais
router.use("/users", require("./usersRoutes"));
router.use("/suppliers", require("./supplierRoutes"));
router.use("/stores", require("./storeRoutes"));
router.use("/products", require("./productRoutes"));
router.use("/orders", require("./orderRoutes"));
router.use("/campaigns", require("./campaignRoutes"));

// Importação de produtos (Excel)
router.use("/products", require("./productsImport"));

module.exports = router;
