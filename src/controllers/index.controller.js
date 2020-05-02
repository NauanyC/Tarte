const User       = require("../models/User");
const bcrypt     = require("bcrypt");
const bodyParser = require("body-parser");

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

    profile: async function profile(req, res){
        res.render("auth/profile");
    },

    loginForm: function login(req, res){
        res.render("auth/login");
    },
    
    login: async function login(req, res){       
        let users = [];
        
        User.find({"name": req.body.name}, function(error, foundUsers){
            if(error){
                console.log("Error: " + error);
            } else {
                users = foundUsers;           
                res.send(foundUsers);
            };
        });

        /* no user found */
        if(users == null){            
            return res.status(400).send("Cannot find user.");
        }

        /* login */
         try{
            if(await bcrypt.compare(req.body.password, user.password)){
                res.render("auth/Profile");
            } else {                
                res.send("Wrong password!");
            }
        } catch(error){
            res.status(500).send();
        }
    },

    registerForm: function register(req, res){
        res.render("auth/register");
    },

    register: async function register(req, res){
        const hashedPassword = await bcrypt.hash(req.body.password, 10); 

        const user =  {
            name: req.body.name,
            password: hashedPassword,
            email: req.body.email
        };

        /* create user */
        User.create(user, function(error, newUser){
            if(error){
                console.log("Sorry, couldn't register" + error);
                res.render("auth/register");
            } else{
                console.log("You're now one of us! Welcome " + req.body.name + ".");
                res.render("auth/Profile");
            }
        });
        /* User.create() */
    }

};

module.exports = indexController;