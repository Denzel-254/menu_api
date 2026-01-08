const express = require("express");
const router = express.Router();
const { getMenu, addMenuItem } = require("../controllers/menu.controller");

router.get("/", getMenu);
router.post("/", addMenuItem);

module.exports = router;
