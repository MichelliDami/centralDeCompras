const express = require("express");
const ProductsController = require("../controllers/productsController");

const router = express.Router();

// Listar todos os produtos
router.get("/", ProductsController.index);

// Buscar produtos por fornecedor
router.get("/supplier/:supplierId", ProductsController.getBySupplier);

// Buscar produto por ID
router.get("/:id", ProductsController.show);

// Criar produto
router.post("/", ProductsController.store);

// Atualizar produto
router.put("/:id", ProductsController.update);

// Deletar produto
router.delete("/:id", ProductsController.delete);

module.exports = router;
