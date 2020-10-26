const Project = require('../models/project.model');

//Simple version, without validation or sanitation
exports.test = function(req, res) {
    res.send('ca fonctionne !! gg :!');
};

//CREATE
exports.project_create = function(req, res) {
    let project = new Project({
        name: req.body.name,
        expectedtime: req.body.expectedtime
    });

    project.save(function(err) {
        if (err) {
            return next(err);
        }
        res.send('Project Created  successfully')
    })
};

//READ
exports.project_all = (req, res) => {
    Project.find()
        .sort({ name: -1 })
        .then((project) => {
            res.status(200).send(project);
        })
};
//READ par id:
// exports.project_details = function(req, res) {
//     Project.findById(req.params.id, function(project) {
//         res.send(project);
//     })
// };

//UPDATE
exports.project_update = function(req, res) {
    Project.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err, project) {
        if (err) return next(err);
        res.send('Project udpated.');
    });
};

//DELETE
exports.project_delete = function(req, res) {
    Project.findByIdAndRemove(req.params.id, function(err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};


//READ par id:
// exports.project_details = function(req, res) {
//     Project.findById(req.params.id, function(err, project) {
//         if (err) return next(err);
//         res.send(project);
//     })
// };