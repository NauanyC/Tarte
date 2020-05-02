const express = require("express");
const router  =  express.Router(); 

const IndexController = require("../controllers/index.controller"); 

router.get("/", IndexController.landing);
router.get("/About", IndexController.about);
router.get("/Delivery", IndexController.delivery);
router.get("/Profile", IndexController.profile);

/* login */
router.get("/Login", IndexController.loginForm);
router.post("/Login", IndexController.login);

/* register */
router.get("/Register", IndexController.registerForm);
router.post("/Register", IndexController.register);

module.exports = router;