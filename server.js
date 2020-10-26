const express = require("express");
const app = express();

//const User = require("./src/user.model"); //prend model user depuis user.model.js

//body parser : npm package that is used to parse the incoming request bodies in a middleware
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));


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

// localhost:8080/ 
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
});



// OLD -----------------------------------------
// // localhost:8080/quotes
// app.post('/quotes', (req, res) => {
//     console.log(req.body)
// })

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