const { Router } = require("express");

const router = Router();

const { getDevices, getDevice } = require("../controllers/devices");

router.get("/", getDevices);
router.get("/:id", getDevice);

module.exports = router;
