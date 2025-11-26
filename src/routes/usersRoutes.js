const express = require("express");
const UsersController = require("../controllers/usersController");

const router = express.Router();

router.get("/", UsersController.index);
router.get("/:id", UsersController.show);
router.post("/", UsersController.store);
router.put("/:id", UsersController.update);
router.delete("/:id", UsersController.delete);

module.exports = router;
