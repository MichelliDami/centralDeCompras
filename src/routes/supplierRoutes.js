const express = require("express");
const suppliersController = require("../controllers/suppliersController");

const router = express.Router();

// CRUD básico
router.get("/", suppliersController.index);
router.get("/:id", suppliersController.show);
router.post("/", suppliersController.store);
router.put("/:id", suppliersController.update);
router.delete("/:id", suppliersController.delete);

// ➕ adicionar endereço ao fornecedor
router.post("/:id/address", suppliersController.addAddress);

// ➕ adicionar contato ao fornecedor
router.post("/:id/contact", suppliersController.addContact);

module.exports = router;
