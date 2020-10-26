const express = require("express");
const app = express();
const connectDb = require("./src/connection"); //connect mongodb
//const User = require("./src/user.model"); //prend model user depuis user.model.js
const bodyParser = require('body-parser')
let port = 8080;
connectDb().then(() => {
    console.log("MongoDb connected");
});

const project = require('./api/routes/project.route'); // import routes projects
//bodyparser




app.use('/projects', project);
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});


// //terminal powershell
// app.listen(PORT, function() {
//     console.log(`Listening on ${PORT}`);
// });

//connection mongodb

// localhost:8080/
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

// // localhost:8080/quotes
// app.post('/quotes', (req, res) => {
//     console.log(req.body)
// })


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