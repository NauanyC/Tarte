const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({    
    name: {type: "String", required: true},
    password: {type: "String", required:true},
    age: {type: "Number", required: false},
    membership: {type: "Date", default: Date.now()},
    email: {type: "String", required:true}
});

module.exports = mongoose.model("User", UserSchema);