const Dish = require("../models/Dish");

const dishesController = {  

    menu: function menu(req, res){
        Dish.find({}, function(error, dishes){
            if(error){
                console.log("Error!" + error);
            } else{                                
                res.render("navbar/menu", {dishes: dishes});
            }
        });
    },

    read: async function read(req, res){
        Dish.findById(req.params.id, function(error, dish){
            if(error){                
                console.log("Sorry, couldn't find it!" + error);    
                console.log("Error!" + error);
            } else{  
                res.send(dish);
            }
        });
    },

    createDishForm: async function createDishForm(req, res){
        res.render("dishes/new");
    },

    /* gotta sanitize the routes later */
    create: async function create(req, res){        
        const newDish = (req.body);  
        Dish.create(newDish, function(error, newDish){
            if(error){
                console.log("Sorry, couldn't save it!" + error);
                res.render("dishes/new");
            } else{
                console.log("Saved the yuumy thing!");
                res.redirect("/Menu");
            }
        });
    },

    editDishForm: async function editDishForm(req, res){
        res.render("dishes/edit");
    },

    delete: async function destroy(req, res){
        Dish.findByIdAndRemove(req.params.id, function(error){
            if(error){
                console.log("Sorry, couldn't delete the dish! " + error);
                res.redirect("/Menu");
            } else{
                console.log("Dish deleted, sir");
                res.redirect("/Menu");
            }
        });
    }
};

module.exports = dishesController;