const express = require("express");
const app = express();

//const User = require("./src/user.model"); //prend model user depuis user.model.js

//body parser : npm pazckage that is used to parse the incoming request bodies in a middleware
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//cookie parser
// var cookieParser = require('cookie-parser')
// app.use(cookieParser());

//connection a la database
const connectDb = require("./src/connection"); //connect mongodb
connectDb().then(() => {
    console.log("MongoDb connected");
});

//s'affiche ds terminal powershell  
let port = 8080;
app.listen(port, () => {
    console.log('Server running on port: ' + port);
});

// import routes projects 
const project = require('./api/routes/project.route');
app.use('/projects', project);
//import route user
const user = require('./api/routes/user.route');
app.use('/user', user);

// localhost:8080/ 
const auth = require('./api/middleware/auth');
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get("/testtoken", auth, (req, res) => {
    res.sendFile(__dirname + '/index.html')
});


//CREATE from html form  
app.post('projects/create', function(req, res) {
    console.log(req.body.name);
    console.log(req.body.expectedtime);
})

// app.get('/logout', auth, function(req, res){
//     console.log('User Id', req.user._id);
//     User.findByIdAndRemove(req.user._id, function(err){
//     if(err) res.send(err);
//     res.json({ message: 'User Deleted!'});
//    })
// });



// OLD -----------------------------------------

// app.post('projects/create', function(req, res) {
//     res.send('le name "' + req.body.name + '"et le time ;' + req.body.expectedtime + "on bien ete envoyé.");
// });


// //terminal powershell
// app.listen(PORT, function() {
//     console.log(`Listening on ${PORT}`);
// });

//connection mongodb
//test creation user sans utiliser post http verb : 

//recupere les users et leurs infos
// app.get("/users", async(req, res) => {
//     const users = await User.find();
//     res.json(users);
// });

// la page user-create creer l'user
// app.get("/user-create", async(req, res) => {
//     const user = new User({ prenom: 'prenom7', nom: 'nom7', age: 7 }); //dapres le model user en attendant de le faire avec index.html
//     await user.save().then(() => console.log("User created"));
//     res.send("User created \n");
// });