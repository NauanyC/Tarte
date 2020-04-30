const express = require("express")
const router  = express.Router();

const DishesController = require("../controllers/dishes.controller");

router.get("/", DishesController.menu);

/* New Dish */
router.get("/New", DishesController.createDishForm);
router.post("/", DishesController.create);

/* Dish's data */
router.get("/:id", DishesController.read);
    
/* Edit dish */
router.get("/:id/Edit", DishesController.editDishForm);

/* Delete dish */
router.delete("/:id", DishesController.delete);
module.exports = router;