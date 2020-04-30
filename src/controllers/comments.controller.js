const Comment = require("../models/Comment");

const commentsController = {

    index: async function index(req, res){
        res.send("Here you can read all the comments of a specific dish!");
    },

    newCommentForm: async function newCommentForm(req, res){
        res.send("Here you can post a new comment!");
    },

    create: async function create(req, res){
        res.send("You just created a comment!");
    },

    editCommentForm: async function editCommentForm(req, res){
        res.send("You're in the form that edits comments");
    },

    update: async function update(req, res){
        res.send("You updated me, a comment!");
    },

    delete: async function remove(req, res){
        res.send("Nooo! Comment removed.");
    },


};

module.exports = commentsController;