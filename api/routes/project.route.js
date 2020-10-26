const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const project_controller = require('../controllers/project.controllers');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', project_controller.test);
module.exports = router;