const express    = require("express");
const app        = express();
const mongoose   = require("mongoose");
const bodyParser = require("body-parser")
const expressSanitizer = require("express-sanitizer");

/* configs */
app.set("view engine", "ejs"); 
app.set('views', __dirname + '/src/views');
app.use(express.static(__dirname + '/src/public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(expressSanitizer());

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
const Index    = require("./src/routes/index.route"); 
const Menu     = require("./src/routes/dishes.route"); 
const Comments = require("./src/routes/comments.route");
 

/* routes */
app.use("/", Index);
app.use("/Menu", Menu);
app.use("/Menu/:id/Comments", Comments);




/* port */
app.listen(3000, function(){
    console.log("Server on   and serving, sir!");
});