const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let TeamSchema = new Schema({
    name: { type: String, unique: true, required: true },
    user1: { type: String},
user2: { type: String},
user3: { type: String},
user4: { type: String},


});


module.exports = mongoose.model('team', TeamSchema);