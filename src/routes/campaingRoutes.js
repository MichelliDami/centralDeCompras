const express = require("express");
const CampaignsController = require("../controllers/campaingsController");

const router = express.Router();

router.get("/", CampaignsController.index);
router.get("/:id", CampaignsController.show);
router.post("/", CampaignsController.store);
router.put("/:id", CampaignsController.update);
router.delete("/:id", CampaignsController.delete);

module.exports = router;
