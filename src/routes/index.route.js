const express = require("express");
const router  =  express.Router(); 

const IndexController = require("../controllers/index.controller"); 

router.get("/", IndexController.landing);
router.get("/About", IndexController.about);
router.get("/Delivery", IndexController.delivery);
router.get("/Menu", IndexController.menu);

module.exports = router;