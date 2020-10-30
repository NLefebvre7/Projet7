const mongoose = require("mongoose");
//const User = require("./user.model");
const connection = "mongodb://mongo:27017/mongodb"; //old : mongodb://localhost:27017/mongodb7
const connectDb = () => {

    return mongoose.connect(connection);
};
mongoose.set("useCreateIndex", true);
module.exports = connectDb;