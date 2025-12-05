const express = require("express");
const multer = require("multer");
const ProductsImportController = require("../controllers/productsImportController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/import", upload.single("file"), ProductsImportController.import);

module.exports = router;
