const Project = require('../models/project.model');

//Simple version, without validation or sanitation
exports.test = function(req, res) {
    res.send('ca fonctionne !! gg :!');
};