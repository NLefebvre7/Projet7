const express = require("express");
const app = express();
const connectDb = require("./src/connection"); //connect mongodb
const User = require("./src/user.model"); //prend model user depuis user.model.js
const PORT = 8080;

// localhost:8080
app.get("/", (req, res) => {
    res.send("Hello from Node.js app \n");
});

//terminal powershell
app.listen(PORT, function() {
    console.log(`Listening on ${PORT}`);
});

//connection mongodb
connectDb().then(() => {
    console.log("MongoDb connected");
});


//test creation user sans utiliser post http verb : 

//recupere les users et leurs infos
app.get("/users", async(req, res) => {
    const users = await User.find();
    res.json(users);
});

// la page user-create creer l'user
app.get("/user-create", async(req, res) => {
    const user = new User({ prenom: 'prenom7', nom: 'nom7', age: 7 }); //dapres le model user en attendant de le faire avec index.html
    await user.save().then(() => console.log("User created"));
    res.send("User created \n");
});