const express = require('express');
const router = express.Router();

//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//const User_model = require("../models/user.model");
const user_controller = require('../controllers/user.controllers');

//create user
//router.post('/signup', user_controller.user_create);
//const auth = require('../middleware/auth');


router.get('/test', user_controller.test);

router.post('/signup', user_controller.signup);

router.get('/login', user_controller.login);
module.exports = router;