const dishesController = {
    menu: async function menu(req, res){
        res.send("Menu");
    },

    read: async function read(req, res){
        res.send("Read " + req.params.id);
    },

    createDishForm: async function createDishForm(req, res){
        res.send("Create a new dish");
    },

    editDishForm: async function editDishForm(req, res){
        res.send("Edit a dish");
    }
};

module.exports = dishesController;