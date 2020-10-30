const express = require('express');
const router = express.Router();
const passport = require('passport');
//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const team_controller = require('../controllers/team.controllers');
//CREATE
router.post('/create', team_controller.team_create);

//READ
// router.get('/:id', team_controller.team_details);
router.get('/all', team_controller.team_all);

//UPDATE
router.put('/:id/update', team_controller.team_update);

//DELETE
router.delete('/:id/delete', team_controller.team_delete);

// Test
router.get('/test', team_controller.test);


module.exports = router;