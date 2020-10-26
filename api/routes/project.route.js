const express = require('express');
const router = express.Router();


const project_controller = require('../controllers/project.controllers');

//CREATE
router.post('/create', project_controller.project_create);

//READ
// router.get('/:id', project_controller.project_details);
router.get('/all', project_controller.project_all);

//UPDATE
router.put('/:id/update', project_controller.project_update);

//DELETE
router.delete('/:id/delete', project_controller.project_delete);

// Test
router.get('/test', project_controller.test);
module.exports = router;