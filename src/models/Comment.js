const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
    author: {type: "String", required: true},
    description: {type: "String", required: true},
    stars: {type: "Number", required: true}
});

module.exports = mongoose.model("Comment", CommentSchema);