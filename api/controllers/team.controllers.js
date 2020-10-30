const Team = require('../models/team.model');

//Simple version, without validation or sanitation
exports.test = function(req, res) {
    res.send('route des team fonctionne');
};

//CREATE
exports.team_create = function(req, res) {
    let team = new Team({
        name: req.body.name
    });

    team.save(function(err) {
        if (err) {
            return next(err);
        }
        res.send('team Created  successfully')
    })
};

//READ
exports.team_all = (req, res) => {
    Team.find()
        .sort({ name: -1 })
        .then((team) => {
            res.status(200).send(team);
        })
};
//READ par id:
// exports.project_details = function(req, res) {
//     Project.findById(req.params.id, function(project) {
//         res.send(project);
//     })
// };

//UPDATE
exports.team_update = function(req, res) {
    Team.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err, project) {
        if (err) return (err);
        res.send('Team udpated.');
    });
};

//DELETE
exports.team_delete = function(req, res) {
    Team.findByIdAndRemove(req.params.id, function(err) {
        if (err) return next(err);
        res.send('team Deleted successfully!');
    })
};


