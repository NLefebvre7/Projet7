const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: { type: String, unique: true, required: true, unique: true },
    password: { type: String, required: true }
    //token: { type: String, required: true }
    //createddate: { type: Date, default: Date.now } //,
    //hash: { type: String, required: true }
});

// Userschema.set('toJSON', {
//     virtuals: true,
//     versionKey: false,
//     transform: function(doc, ret) {
//         delete ret._id;
//         delete ret.hash;
//     }
// });

module.exports = mongoose.model('user', UserSchema);