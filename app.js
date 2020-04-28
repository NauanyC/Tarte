const express  = require("express");
const app      = express();
const mongoose = require("mongoose");

/* configs */
app.set("view engine", "ejs"); 
app.set('views', __dirname + '/src/views');
app.use(express.static(__dirname + '/src/public'));

/* db connection */
const URI = "mongodb+srv://Nau:Nau@cluster0-ocxup.mongodb.net/test?retryWrites=true&w=majority";
const connectDB = async() => {
    await mongoose
    .connect(URI,     
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err)=>{
        if(err) throw err;
        console.log("Database connected successfully");
    });
};

connectDB();


/* routers files */
const Index  = require("./src/routes/index.route"); 
const Menu   = require("./src/routes/dishes.route"); 

/* routes */
app.use("/", Index);
app.use("/Menu", Menu);



/* port */
app.listen(3000, function(){
    console.log("Server on   and serving, sir!");
});