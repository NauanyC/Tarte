const mongoose = require("mongoose");

const DishSchema = mongoose.Schema({
    name:        {type: "String", required: true},
    description: {type: "String", required: true},
    price: "Number",
    stars: "Number"    
});

/* Export the model */
module.exports = mongoose.model("Dish", DishSchema);