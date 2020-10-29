const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const rand = Boolean(Math.round(Math.random()));
let UserSchema = new Schema({
    username: { type: String, unique: true, required: true, unique: true },
    password: { type: String, required: true },
    createddate: { type: Date, default: Date.now },
    admin: { type: Number } // 1 admin
    //token: { type: String, required: true },
    //,
    //hash: { type: String, required: true }
});

// UserSchema.pre(
//     'save',
//     async function(next) {
//         const user = this;
//         const hash = await bcrypt.hash(this.password, 10);

//         this.password = hash;
//         next();
//     }
// );

// UserSchema.methods.isValidPassword = async function(password) {
//         const user = this;
//         const compare = await bcrypt.compare(password, user.password);

//         return compare;
//     }
// Userschema.set('toJSON', {
//     virtuals: true,
//     versionKey: false,
//     transform: function(doc, ret) {
//         delete ret._id;
//         delete ret.hash;
//     }
// });

module.exports = mongoose.model('user', UserSchema);