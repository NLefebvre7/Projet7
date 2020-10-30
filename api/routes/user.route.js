const express = require('express');
const router = express.Router();
const passport = require('passport');
//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//const User_model = require("../models/user.model");
const user_controller = require('../controllers/user.controllers');

//create user
//router.post('/signup', user_controller.user_create);
const auth = require('../middleware/auth');


router.get('/test', user_controller.test);

router.post('/signup', user_controller.signup);

router.post('/login', user_controller.login);

router.get('/all', user_controller.user_all);

router.delete('/:id/delete', user_controller.userdelete);
router.post('/admin', user_controller.admin);
// router.post(
//     '/signup',
//     passport.authenticate('signup', { session: false }),
//     async(req, res, next) => {
//         res.json({
//             message: 'Signup successful',
//             user: req.user
//         });
//     }
// );
// router.post(
//     '/login',
//     async(req, res, next) => {
//         passport.authenticate(
//             'login',
//             async(err, user, info) => {
//                 try {
//                     // if (err || !user) {
//                     //     const error = new Error('An error occurred.');

//                     //     return next(error);
//                     // }

//                     req.login(
//                         user, { session: false },
//                         async(error) => {
//                             if (error) return next(error);

//                             const body = { _id: user._id, username: user.username };
//                             const token = jwt.sign({ user: body }, 'TOP_SECRET');

//                             return res.json({ token });
//                         }
//                     );
//                 } catch (error) {
//                     return next(error);
//                 }
//             }
//         )(req, res, next);
//     }
// );










module.exports = router;