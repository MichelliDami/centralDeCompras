const express = require("express");
const StoresController = require("../controllers/storesController");

const router = express.Router();

router.get("/", StoresController.index);
router.get("/:id", StoresController.show);
router.post("/", StoresController.store);
router.put("/:id", StoresController.update);
router.delete("/:id", StoresController.delete);
router.post("/:id/contact", StoresController.addcontact);


// endereço → vinculado à loja
router.post("/:id/address", StoresController.addaddress);

module.exports = router;
