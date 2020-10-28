const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const UserModel = require('../models/user.model');

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID';
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};



// passport.use(
//     'signup',
//     new localStrategy({
//             usernameField: 'username',
//             passwordField: 'password'
//         },
//         async(username, password, done) => {
//             try {
//                 const user = await UserModel.create({ username, password });

//                 return done(null, user);
//             } catch (error) {
//                 done(error);
//             }
//         }
//     )
// );


// passport.use(
//     'login',
//     new localStrategy({
//             usernameField: 'email',
//             passwordField: 'password'
//         },
//         async(email, password, done) => {
//             try {
//                 const user = await UserModel.findOne({ email });

//                 if (!user) {
//                     return done(null, false, { message: 'User not found' });
//                 }

//                 const validate = await user.isValidPassword(password);

//                 if (!validate) {
//                     return done(null, false, { message: 'Wrong Password' });
//                 }

//                 return done(null, user, { message: 'Logged in Successfully' });
//             } catch (error) {
//                 return done(error);
//             }
//         }
//     )
// );


// const JWTstrategy = require('passport-jwt').Strategy;
// const ExtractJWT = require('passport-jwt').ExtractJwt;

// passport.use(
//     new JWTstrategy({
//             secretOrKey: 'TOP_SECRET',
//             jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
//         },
//         async(token, done) => {
//             try {
//                 return done(null, token.user);
//             } catch (error) {
//                 done(error);
//             }
//         }
//     )
// );