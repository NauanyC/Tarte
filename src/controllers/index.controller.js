const indexController = {

    landing: function landing(req, res){
        res.render("navbar/index");
    },

    about: function about(req, res){
        res.render("navbar/about");
    },

    delivery: function delivery(req, res){
        res.render("navbar/delivery");
    },

    login: function login(req, res){
        res.render("auth/login");
    },

    register: function register(req, res){
        res.render("auth/register");
    }

};

module.exports = indexController;